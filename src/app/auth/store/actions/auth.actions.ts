import { Action } from '@ngrx/store';

import { UserCredentials } from './../../services/auth-user.service';

export interface UserCredentials {
  email: string;
  password: string;
}

/* SignUp */
export const SIGN_UP =  '[Auth] Sign Up';
export const SIGN_UP_SUCCESS =  '[Auth] SignUp Success';
export const SIGN_UP_FAIL =  '[Auth] SignUp Fail';

export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: UserCredentials) {}
}

export class SignUpSuccess implements Action {
  readonly type = SIGN_UP_SUCCESS;
  constructor(public payload?: any) {}
}

export class SignUpFail implements Action {
  readonly type = SIGN_UP_FAIL;
  constructor(public payload?: any) {}
}

/* SignIn */
export const SIGN_IN =  '[Auth] Sign In';
export const SIGN_IN_SUCCESS =  '[Auth] Sign In Success';
export const SIGN_IN_FAIL =  '[Auth] Sign In Fail';

export class SignIn implements Action {
  readonly type = SIGN_IN;
  constructor(public payload: UserCredentials) {}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload: any) {}
}

export class SignInFail implements Action {
  readonly type = SIGN_IN_FAIL;
  constructor(public payload: any) {}
}

/* Sign Out */
export const SIGN_OUT =  '[Auth] Sign Out';
export const SIGN_OUT_SUCCESS =  '[Auth] Sign Out Success';
export const SIGN_OUT_FAIL =  '[Auth] Sign Out Fail';


export class SignOut implements Action {
  readonly type = SIGN_OUT;
  constructor(public payload?: any) {}
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class SignOutFail implements Action {
  readonly type = SIGN_OUT_FAIL;
  constructor(public payload?: any) {}
}

/* Reset Error */
export const RESET_ERROR =  '[Auth] Reset Error';

export class ResetError implements Action {
  readonly type = RESET_ERROR;
  constructor(public payload?: any) {}
}

/* Action types */
export type AuthAction =
| SignIn
| SignInSuccess
| SignInFail
| SignUp
| SignUpSuccess
| SignUpFail
| SignOut
| SignOutSuccess
| SignOutFail
| ResetError;
