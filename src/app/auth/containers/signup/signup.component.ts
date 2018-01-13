import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuthStore from './../../store';

@Component({
  selector: 'app-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignUpComponent implements OnInit {

  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private authStore: Store<fromAuthStore.AuthState>) { }

  ngOnInit() {
    this.error$ = this.authStore.select(fromAuthStore.getError);
    this.loading$ = this.authStore.select(fromAuthStore.getLoading);
  }

  onSignUp(event: fromAuthStore.UserCredentials) {
    this.authStore.dispatch(new fromAuthStore.SignUp(event));
  }

  onResetError() {
    this.authStore.dispatch(new fromAuthStore.ResetError());
  }

}
