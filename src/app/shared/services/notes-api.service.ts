import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Note } from './../models/note.model';

export interface NotePatchInfo {
  id: string;
  updatedProps: Array<NotePropertiesToPatch>;
}

export interface NotePropertiesToPatch {
  propName: string;
  value: any;
}

@Injectable()
  export class NotesApiService {

  BASE_API_URL = 'https://notes-rest-api.herokuapp.com/notes/';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<any> {
    return this.http
      .get<any>(this.BASE_API_URL)
      .pipe(
        map((dbResult) => {
          const notesArr = dbResult.results.map((noteInfo) => {
            return new Note(...noteInfo.note);
          });
          return notesArr;
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createNote(payload: Note): Observable<any> {
    return this.http
      .post<any>(this.BASE_API_URL, payload)
      .pipe(
        map((dbResult) => {
          return new Note({ ...dbResult.createdNote.note });
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updateNote(payload: NotePatchInfo) {
    return this.http
      .patch<any>(`${this.BASE_API_URL}/${payload.id}`, payload.updatedProps)
      .pipe(
        map(dbresult => {
          const { __v, ...noteObj } = dbresult.result;
          return new Note(noteObj);
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  removeNote(noteId: string) {
    return this.http
      .delete<any>(`${this.BASE_API_URL}/${noteId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}

