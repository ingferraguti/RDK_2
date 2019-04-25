// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { BlockEditComponent} from './pages/block-edit/block-edit.component';
import { BlockListComponent} from './pages/block-list/block-list.component';
import { BlockTypeEditComponent} from './pages/block-type-edit/block-type-edit.component';
import { BlockTypeListComponent} from './pages/block-type-list/block-type-list.component';
import { ItemEditComponent} from './pages/item-edit/item-edit.component';
import { ItemListComponent} from './pages/item-list/item-list.component';
import { ItemTypeEditComponent} from './pages/item-type-edit/item-type-edit.component';
import { ItemTypeListComponent} from './pages/item-type-list/item-type-list.component';
import { RoleEditComponent} from './pages/role-edit/role-edit.component';
import { RoleListComponent} from './pages/role-list/role-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'blocks/:id',  loadChildren: './pages/block-edit/block-edit.module#BlockEditModule' , canActivate: [AuthGuard] },
    { path: 'blocks',  loadChildren: './pages/block-list/block-list.module#BlockListModule' , canActivate: [AuthGuard], data:["ADMIN"] },
    { path: 'blocktypes/:id',  loadChildren: './pages/block-type-edit/block-type-edit.module#BlockTypeEditModule' , canActivate: [AuthGuard] },
    { path: 'blocktypes',  loadChildren: './pages/block-type-list/block-type-list.module#BlockTypeListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'items/:id',  loadChildren: './pages/item-edit/item-edit.module#ItemEditModule' , canActivate: [AuthGuard] },
    { path: 'items',  loadChildren: './pages/item-list/item-list.module#ItemListModule' , canActivate: [AuthGuard] },
    { path: 'types/:id',  loadChildren: './pages/item-type-edit/item-type-edit.module#ItemTypeEditModule' , canActivate: [AuthGuard] },
    { path: 'types',  loadChildren: './pages/item-type-list/item-type-list.module#ItemTypeListModule' , canActivate: [AuthGuard] },
    { path: 'roles/:id',  loadChildren: './pages/role-edit/role-edit.module#RoleEditModule' , canActivate: [AuthGuard] },
    { path: 'roles',  loadChildren: './pages/role-list/role-list.module#RoleListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
