import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserDropdownComponent } from './header-user-dropdown.component';


describe('HeaderUserDropdownComponent', () => {
  /* unit tests */
  describe('unit tests', () => {
    let headerUserDropdownComponent: HeaderUserDropdownComponent;

    beforeEach(() => {
      headerUserDropdownComponent = new HeaderUserDropdownComponent();
    });

    describe('onSignOut', () => {
      it('should raise signOut event', () => {
        let signOut =  null;
        headerUserDropdownComponent.signOut.subscribe((so) => {
          signOut = so;
        });

        headerUserDropdownComponent.onSignOut();

        expect(signOut).toEqual(null);
      });
    });
  });
  /* template integration tests */
  describe('template integration tests', () => {
    let component: HeaderUserDropdownComponent;
    let fixture: ComponentFixture<HeaderUserDropdownComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeaderUserDropdownComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      fixture = TestBed.createComponent(HeaderUserDropdownComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => fixture.destroy());

    it('should be created', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should display userEmail', () => {
      const email = 'test';
      component.userEmail = email;
      fixture.detectChanges();
      const buttonEl = fixture.debugElement.query(By.css('.user-button'));

      expect(buttonEl.nativeElement.textContent).toContain(email);
    });
  });

});

