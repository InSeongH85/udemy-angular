import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { warningAlert } from './warningAlert/warningAlert.component';
import { successAlert } from './successAlert/successAlert.component';

@NgModule({
  declarations: [
    AppComponent, warningAlert, successAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
