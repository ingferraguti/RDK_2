// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TypeService } from '../../services/type.service';
import { ItemService } from '../../services/item.service';
// Import Models
import { Type } from '../../domain/rapi-dev-kit_db/type';
import { Block } from '../../domain/rapi-dev-kit_db/block';
import { Item } from '../../domain/rapi-dev-kit_db/item';

// START - USED SERVICES
/**
* TypeService.create
*	@description CRUD ACTION create
*
* ItemService.findByType
*	@description CRUD ACTION findByType
*	@param Objectid key Id della risorsa Type da cercare
*
* TypeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* TypeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Type
 */
@Component({
    selector: 'app-type-edit',
    templateUrl: 'type-edit.component.html',
    styleUrls: ['type-edit.component.css']
})
export class TypeEditComponent implements OnInit {
    item: Type;
    listItemType: Type[];
    listType: Type[];
    externalBlock: Block[];
    externalItem: Item[];
    model: Type;
    formValid: Boolean;

    constructor(
    private typeService: TypeService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Type();
        this.externalBlock = [];
        this.externalItem = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.typeService.get(id).subscribe(item => this.item = item);
                this.blockService.findByItemType(id).subscribe(list => this.externalBlock = list);
                this.itemService.findByType(id).subscribe(list => this.externalItem = list);
            }
            // Get relations
        });
    }


    /**
     * Save Type
     *
     * @param {boolean} formValid Form validity check
     * @param Type item Type to save
     */
    save(formValid: boolean, item: Type): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.typeService.update(item).subscribe(data => this.goBack());
            } else {
                this.typeService.create(item).subscribe(data => this.goBack());
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



