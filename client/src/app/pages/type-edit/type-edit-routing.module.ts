import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeEditComponent } from './type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeEditRoutingModule { }
