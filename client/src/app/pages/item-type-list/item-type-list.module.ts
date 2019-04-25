import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTypeListComponent } from './item-type-list.component';
import { ItemTypeListRoutingModule } from './item-type-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ItemTypeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ItemTypeListComponent
  ]
})
export class ItemTypeListModule { }
