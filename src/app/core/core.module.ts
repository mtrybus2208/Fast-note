import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, metaReducers, effects, CustomSerializer } from './store';
import { AuthModule } from './../auth/auth.module';
import { AppRoutingModule } from './../app-routing.module';

import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import * as fromInterceptors from './../shared/interceptors';
import { NotesApiService } from './../shared/services/notes-api.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    FooterComponent
  ]
})
export class CoreModule { }
