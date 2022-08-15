import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./component/header/header.component";
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ListContractComponent,
    CreateContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
