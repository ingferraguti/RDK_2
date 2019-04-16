import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ItemService } from '../../services/item.service';
// Import Models
import { Item } from '../../domain/rapi-dev-kit_db/item';

// START - USED SERVICES
/**
* ItemService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ItemService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Item
 * @class ItemListComponent
 */
@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
    list: Item[];
    search: any = {};
    idSelected: string;
    constructor(
        private itemService: ItemService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.itemService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Item to remove
     *
     * @param {string} id Id of the Item to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Item
     */
    deleteItem() {
        this.itemService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
