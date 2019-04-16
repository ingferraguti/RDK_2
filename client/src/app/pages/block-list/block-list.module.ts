import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockListComponent } from './block-list.component';
import { BlockListRoutingModule } from './block-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BlockListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BlockListComponent
  ]
})
export class BlockListModule { }
