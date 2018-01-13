import { createSelector } from '@ngrx/store';

import * as fromFeature from './../reducers';

export const getAuthenticated = createSelector(fromFeature.getAuthState, auth => auth.authenticated);

export const getUser = createSelector(fromFeature.getAuthState, auth => auth.user);

export const getError = createSelector(fromFeature.getAuthState, auth => auth.error);

export const getLoading = createSelector(fromFeature.getAuthState, auth => auth.loading);


