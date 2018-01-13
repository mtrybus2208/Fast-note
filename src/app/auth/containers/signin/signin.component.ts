import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuthStore from './../../store';

@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.scss']
})
export class SignInComponent implements OnInit {

  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private authStore: Store<fromAuthStore.AuthState>) { }

  ngOnInit() {
    this.error$ = this.authStore.select(fromAuthStore.getError);
    this.loading$ = this.authStore.select(fromAuthStore.getLoading);
  }

  onSignIn(event: fromAuthStore.UserCredentials) {
    this.authStore.dispatch(new fromAuthStore.SignIn(event));
  }

  onResetError() {
    this.authStore.dispatch(new fromAuthStore.ResetError());
  }

}
