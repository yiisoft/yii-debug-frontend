import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './pages/index/index.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewModule } from './pages/view/view.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ErrorService } from './services/error.service';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IndexModule,
    ViewModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ErrorService,
    MatSnackBar,
    Overlay
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
