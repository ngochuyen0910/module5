import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {ComponentModule} from "./component/component.module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        ComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
