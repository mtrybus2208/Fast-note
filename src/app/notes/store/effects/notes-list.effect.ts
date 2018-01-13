import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { filter, withLatestFrom, tap, flatMap, map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as notesActions from './../actions/notes-list.actions';
import * as layoutActions from './../../../store/actions';
import * as fromRoot from './../../../store';
import * as fromNotes from './../../store';
import * as fromServices from './../../../shared/services/notes-api.service';

import { Note } from './../../../shared/models/note.model';

@Injectable()
export class NotesListEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<fromRoot.State>,
    private notesStore$: Store<fromNotes.NotesState>,
    private notesService: fromServices.NotesApiService
  ) {}

  @Effect()
  filterBytitle$ = this.actions$
    .ofType(notesActions.FILTER_BY_TITLE)
    .pipe(
      withLatestFrom(this.notesStore$.select(fromNotes.getAllNotes)),
      map((payload: Array<any>) => {
        const [action, notes] = payload;
        const filtered = notes.filter((note) => note.title.includes(action.payload));
        if (filtered.length > 0) {  return filtered; }
        if (filtered.length === 0) { return []; }
        return filtered;
      }),
      map(filteredNotes => new notesActions.FilterSuccess(filteredNotes)),
      catchError(error => of(new notesActions.LoadNotesFail(error))),
    );

  @Effect()
  loadNotesList$ = this.actions$
    .ofType(notesActions.LOAD_NOTES)
    .pipe(
      switchMap(() => {
        return this.notesService
          .getNotes()
          .pipe(
            map(notes => new notesActions.LoadNotesSuccess(notes)),
            catchError(error => of(new notesActions.LoadNotesFail(error))),
          );
      })
    );

  @Effect()
  createNote$ = this.actions$
    .ofType(notesActions.CREATE_NOTE)
    .pipe(
      map((action: notesActions.CreateNote) => action.payload),
      switchMap((payload) => {
        return this.notesService
          .createNote(payload)
          .pipe(
            map(note => new notesActions.CreateNoteSuccess(note)),
            catchError(error => of(new notesActions.CreateNoteFail(error))),
          );
      }),
    );

  @Effect()
  noteToCreateSelected$ = this.actions$
    .ofType(notesActions.SELECT_NOTE_TO_CREATE)
    .pipe(
      withLatestFrom(this.store$.select(fromRoot.getWindowWidth)),
      map(([action, width]) => {
        const redirect = new fromRoot.Go({ path: ['/notes/new'] });
        const openSidebar =  new fromRoot.CloseNotesSidebar();
        return (width >= 992) ? [redirect] : [redirect, openSidebar];
      }),
      flatMap(payload => payload),
    );

  @Effect()
  createNoteSuccess$ = this.actions$
    .ofType(notesActions.CREATE_NOTE_SUCCESS)
    .pipe(
      map((action: notesActions.CreateNoteSuccess) => action.payload),
      map((note: Note) => new fromRoot.Go({
        path: ['/notes', note._id],
      })),
    );

  @Effect()
  noteToDisplaySelected$ = this.actions$
    .ofType(notesActions.SELECT_NOTE_TO_DISPLAY)
    .pipe(
      withLatestFrom(this.store$.select(fromRoot.getWindowWidth)),
      map((payload: Array<any>) => {
        const [action, width] = payload;
        const redirect = new fromRoot.Go({ path: ['/notes/', action.payload] });
        const openSidebar =  new fromRoot.CloseNotesSidebar();
        return (width >= 992) ? [redirect] : [redirect, openSidebar];
      }),
      flatMap(payload => payload),
    );

  @Effect()
  updateNote$ = this.actions$
    .ofType(notesActions.UPDATE_NOTE)
    .pipe(
      map((action: notesActions.UpdateNote) => action.payload.patch),
      switchMap((payload) => {
        return this.notesService
          .updateNote(payload)
          .pipe(
            map(note => {
              return new notesActions.UpdateNoteSuccess(note);
            }),
            catchError(error => of(new notesActions.UpdateNoteFail(error))),
          );
      }),
    );

    @Effect()
    removeNoteConfirmation$ = this.actions$
    .ofType(notesActions.REMOVE_NOTE_CONFIRMATION)
    .pipe(
      map((action: notesActions.RemoveNoteConfirmation) => action.payload),
      flatMap(payload => [
        new layoutActions.CloseModal(null),
        new notesActions.RemoveNote(payload)
      ])
    );

    @Effect()
    removeNote$ = this.actions$
    .ofType(notesActions.REMOVE_NOTE)
    .pipe(
      map((action: notesActions.RemoveNote) => action.payload),
      switchMap((id) => {
        return this.notesService
          .removeNote(id)
          .pipe(
            map(() => new notesActions.RemoveNoteSuccess(id)),
            catchError(error => of(new notesActions.RemoveNoteFail(error))),
          );
      }),
    );

    @Effect()
    removeNoteSuccess$ = this.actions$
      .ofType(notesActions.REMOVE_NOTE_SUCCESS)
      .pipe(
        map((action: notesActions.CreateNoteSuccess) => action.payload),
        map(() => new fromRoot.Go({
          path: ['/notes/new'],
        })),
      );
}

