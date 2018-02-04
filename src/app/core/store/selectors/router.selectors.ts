import { createSelector } from '@ngrx/store';

import * as fromRootReducers from './../reducers';

export const getCurrentUrl = createSelector(fromRootReducers.getRouterState, ({state}) => state && state.url);

export const getParams = createSelector(fromRootReducers.getRouterState, ({state}) => state && state.params);
