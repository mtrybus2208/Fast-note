import { resolve } from 'url';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { flatMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as authActions from './../actions';
import * as fromRoot from './../../../store';
import * as fromNotes from './../../../notes/store';
import { AuthUserService, UserCredentials } from './../../services/auth-user.service';
import { User } from './../../models/user.model';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthUserService) {}

  @Effect()
  signUp$ = this.actions$
    .ofType(authActions.SIGN_UP)
    .pipe(
      map((action: authActions.SignUp) => action.payload),
      switchMap((payload: UserCredentials) => {
        return this.authService
          .signUp(payload)
          .pipe(
            tap((response) => {
              localStorage.setItem('token', response.user.token);
            }),
            map(res => {
              const { token, notes: removed, ...user } = res.user;
              return user;
            }),
            map(user => new authActions.SignUpSuccess(user)),
            catchError(error => of(new authActions.SignUpFail(error))),
          );
      })
    );

  @Effect()
  signIn$ = this.actions$
    .ofType(authActions.SIGN_IN)
    .pipe(
      map((action: authActions.SignIn) => action.payload),
      switchMap((payload: UserCredentials) => {
        return this.authService
          .signIn(payload)
          .pipe(
            tap((response) => {
              localStorage.setItem('token', response.user.token);
            }),
            map(res => {
              const { token, notes: removed, ...user } = res.user;
              return user;
            }),
            map(user => new authActions.SignInSuccess(user)),
            catchError(error => of(new authActions.SignInFail(error))),
          );
      })
    );

  @Effect()
  signOut$ = this.actions$
    .ofType(authActions.SIGN_OUT)
    .pipe(
      map(() => of(localStorage.clear())),
      map(() => new authActions.SignOutSuccess()),
      catchError(error => of(new authActions.SignInFail(error))),
    );

    @Effect()
    signOutSuccess$ = this.actions$
      .ofType(authActions.SIGN_OUT_SUCCESS)
      .pipe(
        flatMap(payload => [
          new fromRoot.Go({
            path: ['/auth', 'signup'],
          }),
          new fromNotes.ClearNotes(),
        ])
      );

    @Effect()
    signUpSuccess$ = this.actions$
      .ofType(authActions.SIGN_UP_SUCCESS)
      .pipe(
        map(() => new fromRoot.Go({
          path: ['/notes', 'new'],
        })),
      );

    @Effect()
    signInSuccess$ = this.actions$
      .ofType(authActions.SIGN_IN_SUCCESS)
      .pipe(
        map(() => new fromRoot.Go({
          path: ['/notes', 'new'],
        })),
      );
}
