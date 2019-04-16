import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TypeService } from '../../services/type.service';
// Import Models
import { Type } from '../../domain/rapi-dev-kit_db/type';

// START - USED SERVICES
/**
* TypeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TypeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Type
 * @class TypeListComponent
 */
@Component({
    selector: 'app-type-list',
    templateUrl: './type-list.component.html',
    styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
    list: Type[];
    search: any = {};
    idSelected: string;
    constructor(
        private typeService: TypeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.typeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Type to remove
     *
     * @param {string} id Id of the Type to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Type
     */
    deleteItem() {
        this.typeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
