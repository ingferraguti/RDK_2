import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemEditComponent } from './item-edit.component';
import { ItemEditRoutingModule } from './item-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ItemEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ItemEditComponent
  ]
})
export class ItemEditModule { }
