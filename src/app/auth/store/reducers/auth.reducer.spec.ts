import * as fromAuth from './auth.reducer';
import * as fromActions from './../actions/auth.actions';
import { Note } from './../../../shared/models/note.model';
import { UserCredentials } from './../../services/auth-user.service';
/*
oEqual() works for simple literals and variables, and should work for objects

toBe() compares with ===
 */
describe('Auth Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('SIGN_IN', () => {
    it('should set loading to true', () => {
      const { initialState } = fromAuth;
      const payload: UserCredentials = {
        email: 'test@test.com',
        password: '123456',
      };
      const action = new fromActions.SignIn(payload);

      const state = fromAuth.reducer(initialState, action);

      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });
});
