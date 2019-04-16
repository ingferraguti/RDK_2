import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListComponent } from './type-list.component';
import { TypeListRoutingModule } from './type-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TypeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TypeListComponent
  ]
})
export class TypeListModule { }
