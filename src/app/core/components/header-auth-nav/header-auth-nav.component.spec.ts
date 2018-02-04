import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';

import { HeaderAuthNavComponent } from './header-auth-nav.component';


describe('HeaderNavComponent', () => {

  /* template integration tests */
  describe('template integration tests', () => {
    let component: HeaderAuthNavComponent;
    let fixture: ComponentFixture<HeaderAuthNavComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeaderAuthNavComponent
        ],
        imports: [
          RouterTestingModule.withRoutes([])
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      fixture = TestBed.createComponent(HeaderAuthNavComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => fixture.destroy());

    it('should be created', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should have link to signin page', () => {
      fixture.detectChanges();
      const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      const signinIndex = debugElements.findIndex(de => de.properties['href'] === '/auth/signin');

      expect(signinIndex).toBeGreaterThan(-1);
    });

    it('should have link to signup page', () => {
      fixture.detectChanges();
      const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      const signupIndex = debugElements.findIndex(de => de.properties['href'] === '/auth/signup');

      expect(signupIndex).toBeGreaterThan(-1);
    });

  });

});
