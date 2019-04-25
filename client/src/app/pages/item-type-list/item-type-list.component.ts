import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ItemTypeService } from '../../services/item-type.service';
// Import Models
import { ItemType } from '../../domain/rapi-dev-kit_db/item-type';

// START - USED SERVICES
/**
* ItemTypeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ItemTypeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ItemType
 * @class ItemTypeListComponent
 */
@Component({
    selector: 'app-item-type-list',
    templateUrl: './item-type-list.component.html',
    styleUrls: ['./item-type-list.component.css']
})
export class ItemTypeListComponent implements OnInit {
    list: ItemType[];
    search: any = {};
    idSelected: string;
    constructor(
        private itemtypeService: ItemTypeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.itemtypeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ItemType to remove
     *
     * @param {string} id Id of the ItemType to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ItemType
     */
    deleteItem() {
        this.itemtypeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
