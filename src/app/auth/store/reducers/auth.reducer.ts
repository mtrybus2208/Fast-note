import * as fromAuth from './../actions/auth.actions';

import { User } from './../../models/user.model';

export interface AuthState {
  authenticated?: boolean;
  user?: User;
  loading: boolean;
  loaded: boolean;
  error?: string;
}

export const initialState: AuthState = {
  authenticated: false,
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

export function reducer(state = initialState, action: fromAuth.AuthAction): AuthState {
  switch (action.type) {
    case fromAuth.SIGN_IN:
    case fromAuth.SIGN_UP: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case fromAuth.SIGN_IN_SUCCESS:
    case fromAuth.SIGN_UP_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        loading: false,
        loaded: true,
        error: null,
        user: action.payload,
      };
    }
    case fromAuth.SIGN_IN_FAIL:
    case fromAuth.SIGN_UP_FAIL: {
      return {
        ...state,
        authenticated: false,
        loading: false,
        loaded: false,
        error: 'Auth failed - Invalid credentials',
        user: null,
      };
    }
    case fromAuth.RESET_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case fromAuth.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        authenticated: false,
        loading: false,
        loaded: false,
        error: null,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}

