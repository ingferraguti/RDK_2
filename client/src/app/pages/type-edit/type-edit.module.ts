import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeEditComponent } from './type-edit.component';
import { TypeEditRoutingModule } from './type-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TypeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TypeEditComponent
  ]
})
export class TypeEditModule { }
