import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemTypeEditComponent } from './item-type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ItemTypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemTypeEditRoutingModule { }
