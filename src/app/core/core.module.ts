import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers, effects, CustomSerializer } from './store';
import { AuthModule } from './../auth/auth.module';
import { AppRoutingModule } from './../app-routing.module';

import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderBrandComponent } from './components/header-brand/header-brand.component';
import { HeaderToggleComponent } from './components/header-toggle/header-toggle.component';
import { HeaderUserDropdownComponent } from './components/header-user-dropdown/header-user-dropdown.component';
import { HeaderAuthNavComponent } from './components/header-auth-nav/header-auth-nav.component';
import { NotesApiService } from './../shared/services/notes-api.service';
import * as fromInterceptors from './../shared/interceptors';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent,
    HeaderBrandComponent,
    HeaderToggleComponent,
    HeaderUserDropdownComponent,
    HeaderAuthNavComponent,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
  ],
  providers: [
    NotesApiService,
    { provide: HTTP_INTERCEPTORS, useClass: fromInterceptors.AuthInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer},
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent,
    HeaderBrandComponent,
    HeaderToggleComponent,
    HeaderUserDropdownComponent,
    HeaderAuthNavComponent,
  ]
})
export class CoreModule { }
