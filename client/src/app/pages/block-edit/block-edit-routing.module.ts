import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockEditComponent } from './block-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BlockEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockEditRoutingModule { }
