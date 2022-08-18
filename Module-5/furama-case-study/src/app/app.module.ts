import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./component/header/header.component";
import {BodyComponent} from './component/body/body.component';
import {FooterComponent} from './component/footer/footer.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'customerAdd', component: CreateCustomerComponent},
  {path: 'customerEdit/:id', component: EditCustomerComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'facilityAdd', component: CreateFacilityComponent},
  {path: 'facilityEdit/:id', component: EditFacilityComponent},
  {path: 'contract', component: ListContractComponent},
  {path: 'contractAdd', component: CreateContractComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
