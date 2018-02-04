import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavComponent } from './header-nav.component';


describe('HeaderNavComponent', () => {
  /* unit tests */
  describe('unit tests', () => {
    let headerNavComponent: HeaderNavComponent;

    beforeEach(() => {
      headerNavComponent = new HeaderNavComponent();
    });

    describe('onSidebarToggle', () => {
      it('should raise sidebarToggle event', () => {
        let sidebarToggle =  null;
        headerNavComponent.sidebarToggle.subscribe((st) => {
          sidebarToggle = st;
        });

        headerNavComponent.onSidebarToggle(true);

        expect(sidebarToggle).toBeTruthy();
      });
    });

    describe('onSignOut', () => {
      it('should raise signOut event', () => {
        let signOut =  null;
        headerNavComponent.signOut.subscribe((so) => {
          signOut = so;
        });

        headerNavComponent.onSignOut();

        expect(signOut).toEqual(null);
      });
    });

  });

  /* template integration tests */
  describe('template integration tests', () => {
    let component: HeaderNavComponent;
    let fixture: ComponentFixture<HeaderNavComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeaderNavComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      fixture = TestBed.createComponent(HeaderNavComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => fixture.destroy());

    it('should be created', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should render appropriate components when authenticated property is true', () => {
      component.authenticated = true;
      fixture.detectChanges();
      const comp1 = fixture.debugElement.query(By.css('app-header-toggle'));
      const comp2 = fixture.debugElement.query(By.css('app-header-brand'));
      const comp3 = fixture.debugElement.query(By.css('app-header-user-dropdown'));

      expect(comp1).toBeTruthy();
      expect(comp2).toBeTruthy();
      expect(comp3).toBeTruthy();
    });

    it('should render appropriate components when authenticated property is false', () => {
      component.authenticated = false;
      fixture.detectChanges();
      const comp1 = fixture.debugElement.query(By.css('app-header-auth-nav'));
      const comp2 = fixture.debugElement.query(By.css('app-header-brand'));

      expect(comp1).toBeTruthy();
      expect(comp2).toBeTruthy();
    });
  });

});
