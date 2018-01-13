import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<any>('auth');

export * from './auth.reducer';


