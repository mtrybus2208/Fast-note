import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { CoreModule } from './core/core.module';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
