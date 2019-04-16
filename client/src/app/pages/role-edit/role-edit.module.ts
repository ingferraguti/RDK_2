import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEditComponent } from './role-edit.component';
import { RoleEditRoutingModule } from './role-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RoleEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RoleEditComponent
  ]
})
export class RoleEditModule { }
