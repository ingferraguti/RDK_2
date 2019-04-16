import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockTypeEditComponent } from './block-type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BlockTypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockTypeEditRoutingModule { }
