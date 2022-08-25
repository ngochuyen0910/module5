import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './saving/list/list.component';
import {CommonModule} from '@angular/common';
import {EditComponent} from './saving/edit/edit.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  {path: 'saving', component: ListComponent},
  {path: 'savingEdit/:id', component: EditComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, FormsModule, NgxPaginationModule],
    declarations: [
        ListComponent
    ],
    exports: [RouterModule, ListComponent]
})
export class AppRoutingModule { }
