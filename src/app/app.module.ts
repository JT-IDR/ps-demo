import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserSettingsFromComponent} from './user-settings-from/user-settings-from.component';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
