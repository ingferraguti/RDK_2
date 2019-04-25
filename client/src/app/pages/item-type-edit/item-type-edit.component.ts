// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ItemTypeService } from '../../services/item-type.service';
import { ItemService } from '../../services/item.service';
// Import Models
import { ItemType } from '../../domain/rapi-dev-kit_db/item-type';
import { BlockType } from '../../domain/rapi-dev-kit_db/block-type';
import { Item } from '../../domain/rapi-dev-kit_db/item';

// START - USED SERVICES
/**
* ItemTypeService.create
*	@description CRUD ACTION create
*
* ItemService.findByType
*	@description CRUD ACTION findByType
*	@param Objectid key Id della risorsa Type da cercare
*
* ItemTypeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ItemTypeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ItemType
 */
@Component({
    selector: 'app-item-type-edit',
    templateUrl: 'item-type-edit.component.html',
    styleUrls: ['item-type-edit.component.css']
})
export class ItemTypeEditComponent implements OnInit {
    item: ItemType;
    listItemType: ItemType[];
    listType: ItemType[];
    externalBlockType: BlockType[];
    externalItem: Item[];
    model: ItemType;
    formValid: Boolean;

    constructor(
    private itemtypeService: ItemTypeService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ItemType();
        this.externalBlockType = [];
        this.externalItem = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.itemtypeService.get(id).subscribe(item => this.item = item);
                this.blocktypeService.findByItemType(id).subscribe(list => this.externalBlockType = list);
                this.itemService.findByType(id).subscribe(list => this.externalItem = list);
            }
            // Get relations
        });
    }


    /**
     * Save ItemType
     *
     * @param {boolean} formValid Form validity check
     * @param ItemType item ItemType to save
     */
    save(formValid: boolean, item: ItemType): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.itemtypeService.update(item).subscribe(data => this.goBack());
            } else {
                this.itemtypeService.create(item).subscribe(data => this.goBack());
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



