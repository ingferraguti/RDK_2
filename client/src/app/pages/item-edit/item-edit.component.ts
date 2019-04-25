// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ItemService } from '../../services/item.service';
import { UserService } from '../../services/user.service';
import { TypeService } from '../../services/type.service';
// Import Models
import { Item } from '../../domain/rapi-dev-kit_db/item';
import { User } from '../../domain/rapi-dev-kit_db/user';
import { Item } from '../../domain/rapi-dev-kit_db/item';
import { Type } from '../../domain/rapi-dev-kit_db/type';

// START - USED SERVICES
/**
* ItemService.create
*	@description CRUD ACTION create
*
* ItemService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ItemTypeService.list
*	@description CRUD ACTION list
*
* ItemService.list
*	@description CRUD ACTION list
*
* ItemService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Item
 */
@Component({
    selector: 'app-item-edit',
    templateUrl: 'item-edit.component.html',
    styleUrls: ['item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
    item: Item;
    listCreator: User[];
    listLink: Item[];
    listType: Type[];
    model: Item;
    formValid: Boolean;

    constructor(
    private itemService: ItemService,
    private userService: UserService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Item();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.itemService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listCreator = list);
            this.itemService.list().subscribe(list => this.listLink = list);
            this.typeService.list().subscribe(list => this.listType = list);
        });
    }


    /**
     * Save Item
     *
     * @param {boolean} formValid Form validity check
     * @param Item item Item to save
     */
    save(formValid: boolean, item: Item): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.itemService.update(item).subscribe(data => this.goBack());
            } else {
                this.itemService.create(item).subscribe(data => this.goBack());
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



