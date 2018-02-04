import { ActionReducerMap, ActionReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: [{auth: ['authenticated', 'user', 'loading']}], rehydrate: true})(reducer);
}
