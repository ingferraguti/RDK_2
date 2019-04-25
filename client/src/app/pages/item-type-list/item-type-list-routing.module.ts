import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemTypeListComponent } from './item-type-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemTypeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemTypeListRoutingModule { }
