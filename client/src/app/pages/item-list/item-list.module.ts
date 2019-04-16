import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemListRoutingModule } from './item-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ItemListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ItemListComponent
  ]
})
export class ItemListModule { }
