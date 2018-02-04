import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToggleComponent } from './header-toggle.component';


describe('HeaderToggleComponent', () => {
  /* unit tests */
  describe('unit tests', () => {
    let headerToggleComponent: HeaderToggleComponent;

    beforeEach(() => {
      headerToggleComponent = new HeaderToggleComponent();
    });

    describe('onSidebarToggle', () => {
      it('should raise sidebarToggle event with opposite value to sidebarStatus as an argument', () => {
        const value = false;
        headerToggleComponent.sidebarStatus =  value;
        let sidebarToggle =  null;
        headerToggleComponent.sidebarToggle.subscribe((st) => {
          sidebarToggle = st;
        });

        headerToggleComponent.onSidebarToggle();

        expect(sidebarToggle).toEqual(!value);
      });
    });
  });

  /* template integration tests */
  describe('template integration tests', () => {
    let component: HeaderToggleComponent;
    let fixture: ComponentFixture<HeaderToggleComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeaderToggleComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      });

      fixture = TestBed.createComponent(HeaderToggleComponent);
      component = fixture.componentInstance;
    });

    afterEach(() => fixture.destroy());

    it('should be created', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should display "Hide" text when sidebarStatus property is true', () => {
      component.sidebarStatus = true;
      fixture.detectChanges();
      const spanEl = fixture.debugElement.query(By.css('.toggle-info'));

      expect(spanEl.nativeElement.textContent).toContain('Hide');
    });

    it('should display "Show" text when sidebarStatus property is false', () => {
      component.sidebarStatus = false;
      fixture.detectChanges();
      const spanEl = fixture.debugElement.query(By.css('.toggle-info'));

      expect(spanEl.nativeElement.textContent).toContain('Show');
    });

  });

});
