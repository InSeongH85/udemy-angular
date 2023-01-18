import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { warningAlert } from './warning-alert/warningAlert.component';
import { successAlert } from './success-alert/success-alert.component';
import { errorAlert } from './error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent, warningAlert, successAlert, errorAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
