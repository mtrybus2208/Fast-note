import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import { HeaderComponent } from './header.component';
import * as fromRoot from './../../../core/store';
import * as fromAuthStore from './../../../auth/store';

describe('HeaderComponent', () => {

  /* unit tests */
  describe('unit tests', () => {
    let headerComponent: HeaderComponent;
    let store: Store<any>;

    beforeEach(() => {
      store = new Store(null, null, null);
      headerComponent = new HeaderComponent(store);
    });

    describe('ngOnInit', () => {
      it('should set auth$ property with value returned from the store', () => {
        const authState = {
          authenticated: true,
          user: null,
          loading: true,
          loaded: true,
          error: null,
        };
        spyOn(store, 'select').and.callFake(() => {
          return Observable.of(authState);
        });

        let result =  null;
        headerComponent.ngOnInit();
        headerComponent.auth$.subscribe((value) => {
          result = value;
        });

        expect(result).toEqual(authState);
      });

      it('should set sidebarStatus$ property with value returned from the store', () => {
        spyOn(store, 'select').and.callFake(() => {
          return Observable.of(true);
        });

        let result =  null;
        headerComponent.ngOnInit();
        headerComponent.sidebarStatus$.subscribe((value) => {
          result = value;
        });

        expect(result).toEqual(true);
      });
    });

    describe('onSignOut', () => {
      it('should dispatch SignOut action', () => {
        const spy = spyOn(store, 'dispatch');
        const action = new fromAuthStore.SignOut();

        headerComponent.onSignOut();

        expect(spy).toHaveBeenCalledWith(action);
      });
    });

    describe('onSidebarToggle', () => {
      it('should dispatch OpenNotesSidebar action when receives true argument', () => {
        const spy = spyOn(store, 'dispatch');
        const param = true;
        const action = new fromRoot.OpenNotesSidebar();

        headerComponent.onSidebarToggle(param);

        expect(spy).toHaveBeenCalledWith(action);
      });

      it('should dispatch CloseNotesSidebar action when receives false argument', () => {
        const spy = spyOn(store, 'dispatch');
        const param = false;
        const action = new fromRoot.CloseNotesSidebar();

        headerComponent.onSidebarToggle(param);

        expect(spy).toHaveBeenCalledWith(action);
      });
    });
  });

  /* template integration tests */
  describe('template integration tests', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let store: Store<fromRoot.State>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            ...fromRoot.reducers,
          }),
        ],
        declarations: [
          HeaderComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      store = TestBed.get(Store);
      spyOn(store, 'dispatch').and.callThrough();
    });

    afterEach(() => fixture.destroy());

    it('should be created', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

});
