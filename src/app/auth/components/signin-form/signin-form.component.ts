import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as fromAuthStore from './../../store';
import { simpleFade, slideHeight } from './../../../shared/animations';

@Component({
  selector: 'app-signin-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  animations: [simpleFade(300), slideHeight()],
})
export class SignInFormComponent implements OnInit, OnDestroy {

  @Input() error: string;
  @Input() loading: boolean;
  @Output() signIn = new EventEmitter<fromAuthStore.UserCredentials>();
  @Output() resetError = new EventEmitter<boolean>();

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignIn() {
    const email = this.signInForm.controls.email.value;
    const password = this.signInForm.controls.password.value;
    const credentials = {
      email,
      password,
    };
    this.signIn.emit(credentials);
  }

  ngOnDestroy() {
    this.resetError.emit(true);
  }

}
