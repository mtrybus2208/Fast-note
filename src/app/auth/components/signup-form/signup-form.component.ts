import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import * as fromAuthStore from './../../store';
import { simpleFade, slideHeight } from './../../../shared/animations';


@Component({
  selector: 'app-signup-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  animations: [simpleFade(300), slideHeight()],
})
export class SignUpFormComponent implements OnInit, OnDestroy {

  @Input() error: string;
  @Input() loading: boolean;
  @Output() signUp = new EventEmitter<fromAuthStore.UserCredentials>();
  @Output() resetError = new EventEmitter<boolean>();

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required],
    }, { validator: this.passwordConfirming });
  }

  onSignUp() {
    const email = this.signUpForm.controls.email.value;
    const password = this.signUpForm.controls.password.value;
    const credentials = {
      email,
      password,
    };
    this.signUp.emit(credentials);
  }

  ngOnDestroy() {
    this.resetError.emit(true);
  }

  passwordConfirming(c: AbstractControl): any {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

}

