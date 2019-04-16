import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockTypeListComponent } from './block-type-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlockTypeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockTypeListRoutingModule { }
