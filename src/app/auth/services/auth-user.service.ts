import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

export interface UserCredentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthUserService {

  BASE_API_URL = 'https://notes-rest-api.herokuapp.com/user/';

  constructor(private http: HttpClient) {}

  signUp(payload: any): Observable<any> {
    return this.http
      .post<any>(`${this.BASE_API_URL}signup`, payload)
      .pipe(
        map((result) => result),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  signIn(payload: any): Observable<any> {
    return this.http
      .post<any>(`${this.BASE_API_URL}signin`, payload)
      .pipe(
        map((result) => result),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

}
