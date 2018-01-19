import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';

import * as fromRouterReducer from './router.reducer';
import * as fromLayoutReducer from './layout.reducer';
import { localStorageSyncReducer } from './local-storage-sync.reducer';
export * from './router.reducer';

export interface State {
  routerReducer: fromRouter.RouterReducerState<fromRouterReducer.RouterStateUrl>;
  layout: fromLayoutReducer.LayoutState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  layout: fromLayoutReducer.reducer,
};

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const getLayoutState = createFeatureSelector<any>('layout');
export const getRouterState = createFeatureSelector<any>('routerReducer');

