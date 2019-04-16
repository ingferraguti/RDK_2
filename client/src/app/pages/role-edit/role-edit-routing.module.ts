import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEditComponent } from './role-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RoleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleEditRoutingModule { }
