import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTypeEditComponent } from './item-type-edit.component';
import { ItemTypeEditRoutingModule } from './item-type-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ItemTypeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ItemTypeEditComponent
  ]
})
export class ItemTypeEditModule { }
