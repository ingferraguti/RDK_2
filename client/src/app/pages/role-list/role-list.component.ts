import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { RoleService } from '../../services/role.service';
// Import Models
import { Role } from '../../domain/rapi-dev-kit_db/role';

// START - USED SERVICES
/**
* RoleService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* RoleService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Role
 * @class RoleListComponent
 */
@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    list: Role[];
    search: any = {};
    idSelected: string;
    constructor(
        private roleService: RoleService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.roleService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Role to remove
     *
     * @param {string} id Id of the Role to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Role
     */
    deleteItem() {
        this.roleService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
