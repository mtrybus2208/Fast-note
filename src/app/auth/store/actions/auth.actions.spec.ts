import * as fromAuth from './auth.actions';
import { UserCredentials } from './../../services/auth-user.service';

describe('Auth Actions', () => {

  /* Sign Up Actions */
  describe('Sign Up Actions', () => {
    /* Sign Up */
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

    /* SignUp Success */
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

    /* Sign Up Fail */
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

  /* Sign In Actions */
  describe('Sign In Actions', () => {

    /* Sign In */
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

    /* Sign In Success */
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

    /* Sign In Fail */
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

  /* Sign Out Actions */
  describe('Sign Out Actions', () => {

    /* Sign Out */
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

    /* Sign Out */
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

    /* Sign Out */
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

    /* Reset Error Actions */
    describe('Reset Error Actions', () => {

      /* Reset Error */
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
