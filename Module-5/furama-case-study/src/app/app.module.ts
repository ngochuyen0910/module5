import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {ComponentModule} from "./component/component.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ComponentModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000
      }

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
