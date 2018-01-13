import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignInComponent } from './containers/signin/signin.component';
import { SignUpComponent } from './containers/signup/signup.component';
import { SignInFormComponent } from './components/signin-form/signin-form.component';
import { SignUpFormComponent } from './components/signup-form/signup-form.component';
import { reducer, effects } from './store';
import { AuthUserService } from './services/auth-user.service';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature(effects),
    ReactiveFormsModule,
  ],
  providers: [
    AuthUserService,
  ],
  exports: []
})
export class AuthModule { }
