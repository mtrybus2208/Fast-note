import { SignInFormComponent } from './signin-form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


describe('SignInFormComponent', () => {
  describe('unit tests', () => {
    let signInComponent: SignInFormComponent;
    let fb: FormBuilder;

    beforeEach(() => {
      fb = new FormBuilder();
      signInComponent = new SignInFormComponent(fb);
    });

    describe('ngOnInit', () => {
      it('should create a form with 2 controls', () => {
        signInComponent.ngOnInit();

        expect(signInComponent.signInForm.contains('email')).toBeTruthy();
        expect(signInComponent.signInForm.contains('password')).toBeTruthy();
      });

      it('should make the email control required', () => {
        signInComponent.ngOnInit();
        const control = signInComponent.signInForm.get('email');

        control.setValue('');

        expect(control.valid).toBeFalsy();
      });

      it('should make the email control has email validator', () => {
        signInComponent.ngOnInit();
        const control = signInComponent.signInForm.get('email');

        control.setValue('test@gmail.com');
        expect(control.valid).toBeTruthy();


        control.setValue('wrong email');
        expect(control.valid).toBeFalsy();

      });

      it('should make the password control required', () => {
        signInComponent.ngOnInit();
        const control = signInComponent.signInForm.get('password');

        control.setValue('');

        expect(control.valid).toBeFalsy();
      });

      it('should make the password control must contain 6 characters', () => {
        signInComponent.ngOnInit();
        const control = signInComponent.signInForm.get('password');

        control.setValue('1234567');
        expect(control.valid).toBeTruthy();

        control.setValue('1');
        expect(control.valid).toBeFalsy();
      });
    });

    describe('onSignIn', () => {
      it('should raise signIn event with form data', () => {
        signInComponent.ngOnInit();
        const emailControl = signInComponent.signInForm.get('email');
        const passwordControl = signInComponent.signInForm.get('password');
        const credentials = {
          email: 'email@test.com',
          password: '1234567',
        };
        emailControl.setValue(credentials.email);
        passwordControl.setValue(credentials.password);

        let signInEmiter = null;
        signInComponent.signIn.subscribe( value => signInEmiter = value);
        signInComponent.onSignIn();

        expect(signInEmiter).toEqual(credentials);
      });
    });

    describe('ngOnDestroy', () => {
      it('should raise resetError event', () => {
        let resetError = null;
        signInComponent.resetError.subscribe( value => resetError = value);

        signInComponent.ngOnDestroy();

        expect(resetError).toBeTruthy();
      });
    });

  });

  describe('template integration tests', () => {

  });
});
