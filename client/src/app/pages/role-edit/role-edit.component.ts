// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { RoleService } from '../../services/role.service';
// Import Models
import { Role } from '../../domain/rapi-dev-kit_db/role';
import { User } from '../../domain/rapi-dev-kit_db/user';

// START - USED SERVICES
/**
* RoleService.create
*	@description CRUD ACTION create
*
* RoleService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* RoleService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Role
 */
@Component({
    selector: 'app-role-edit',
    templateUrl: 'role-edit.component.html',
    styleUrls: ['role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    item: Role;
    listRole: Role[];
    externalUser: User[];
    model: Role;
    formValid: Boolean;

    constructor(
    private roleService: RoleService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Role();
        this.externalUser = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.roleService.get(id).subscribe(item => this.item = item);
                this.userService.findByRole(id).subscribe(list => this.externalUser = list);
            }
            // Get relations
        });
    }


    /**
     * Save Role
     *
     * @param {boolean} formValid Form validity check
     * @param Role item Role to save
     */
    save(formValid: boolean, item: Role): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.roleService.update(item).subscribe(data => this.goBack());
            } else {
                this.roleService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



