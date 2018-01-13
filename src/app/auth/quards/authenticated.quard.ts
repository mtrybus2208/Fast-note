import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, take, catchError } from 'rxjs/operators';

import * as fromAuthStore from './../store';
import * as fromRootStore from './../../store';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private store: Store<fromAuthStore.AuthState>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuthStore.getAuthenticated)
    .pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.store.dispatch( new fromRootStore.Go({ path: ['/auth', 'signin'] }) );
        }
      }),
      take(1),
    );
  }

}

