import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list.component';
import { RoleListRoutingModule } from './role-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RoleListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RoleListComponent
  ]
})
export class RoleListModule { }
