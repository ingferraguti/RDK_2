import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTypeEditComponent } from './block-type-edit.component';
import { BlockTypeEditRoutingModule } from './block-type-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BlockTypeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BlockTypeEditComponent
  ]
})
export class BlockTypeEditModule { }
