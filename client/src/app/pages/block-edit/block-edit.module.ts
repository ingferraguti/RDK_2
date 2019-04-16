import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditComponent } from './block-edit.component';
import { BlockEditRoutingModule } from './block-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BlockEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BlockEditComponent
  ]
})
export class BlockEditModule { }
