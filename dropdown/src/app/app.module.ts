import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownModule } from "src/components/drop-down/drop-down.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
