import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignInComponent } from './containers/signin/signin.component';
import { SignUpComponent } from './containers/signup/signup.component';


const authRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
