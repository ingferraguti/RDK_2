import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTypeListComponent } from './block-type-list.component';
import { BlockTypeListRoutingModule } from './block-type-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BlockTypeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BlockTypeListComponent
  ]
})
export class BlockTypeListModule { }
