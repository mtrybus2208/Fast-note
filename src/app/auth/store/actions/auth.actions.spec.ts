import * as fromAuth from './auth.actions';
import { UserCredentials } from './../../services/auth-user.service';

describe('Auth Actions', () => {

  /* Sign Up Actions */
  describe('Sign Up Actions', () => {
    describe('Sign Up', () => {
      it('should create an action', () => {

        const payload: UserCredentials = {
          email: 'test@email.com',
          password: '123456',
        };

        const action = new fromAuth.SignUp(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_UP,
          payload,
        });
      });
    });

    describe('Sign Up Success', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignUpSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_UP_SUCCESS,
          payload,
        });
      });
    });

    describe('Sign Up Fail', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignUpFail(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_UP_FAIL,
          payload,
        });
      });
    });
  });

  describe('Sign In Actions', () => {

    describe('Sign In', () => {
      it('should create an action', () => {
        const payload: UserCredentials = {
          email: 'test@email.com',
          password: '123456',
        };
        const action = new fromAuth.SignIn(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_IN,
          payload,
        });
      });
    });

    describe('Sign In Success', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignInSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_IN_SUCCESS,
          payload,
        });
      });
    });

    describe('Sign In Fail', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignInFail(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_IN_FAIL,
          payload,
        });
      });
    });

  });

  describe('Sign Out Actions', () => {

    describe('Sign Out', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignOut(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_OUT,
          payload,
        });
      });
    });

    describe('Sign Out Success', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignOutSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_OUT_SUCCESS,
          payload,
        });
      });
    });

    describe('Sign Out Fail', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.SignOutFail(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.SIGN_OUT_FAIL,
          payload,
        });
      });
    });
  });

  describe('Reset Error Actions', () => {
    describe('Reset Error', () => {
      it('should create an action', () => {
        const payload = {};
        const action = new fromAuth.ResetError(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.RESET_ERROR,
          payload,
        });
      });
    });
  });

});
