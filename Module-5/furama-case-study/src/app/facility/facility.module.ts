import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {FacilityRoutingModule} from "./facility-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
