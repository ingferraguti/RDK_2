// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { BlockTypeService } from '../../services/block-type.service';
// Import Models
import { BlockType } from '../../domain/rapi-dev-kit_db/block-type';
import { Block } from '../../domain/rapi-dev-kit_db/block';

// START - USED SERVICES
/**
* BlockTypeService.create
*	@description CRUD ACTION create
*
* BlockTypeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* BlockTypeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a BlockType
 */
@Component({
    selector: 'app-block-type-edit',
    templateUrl: 'block-type-edit.component.html',
    styleUrls: ['block-type-edit.component.css']
})
export class BlockTypeEditComponent implements OnInit {
    item: BlockType;
    listBlockType: BlockType[];
    externalBlock: Block[];
    model: BlockType;
    formValid: Boolean;

    constructor(
    private blocktypeService: BlockTypeService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new BlockType();
        this.externalBlock = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.blocktypeService.get(id).subscribe(item => this.item = item);
                this.blockService.findByBlockType(id).subscribe(list => this.externalBlock = list);
            }
            // Get relations
        });
    }


    /**
     * Save BlockType
     *
     * @param {boolean} formValid Form validity check
     * @param BlockType item BlockType to save
     */
    save(formValid: boolean, item: BlockType): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.blocktypeService.update(item).subscribe(data => this.goBack());
            } else {
                this.blocktypeService.create(item).subscribe(data => this.goBack());
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



