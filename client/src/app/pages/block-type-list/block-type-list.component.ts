import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { BlockTypeService } from '../../services/block-type.service';
// Import Models
import { BlockType } from '../../domain/rapi-dev-kit_db/block-type';

// START - USED SERVICES
/**
* BlockTypeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* BlockTypeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of BlockType
 * @class BlockTypeListComponent
 */
@Component({
    selector: 'app-block-type-list',
    templateUrl: './block-type-list.component.html',
    styleUrls: ['./block-type-list.component.css']
})
export class BlockTypeListComponent implements OnInit {
    list: BlockType[];
    search: any = {};
    idSelected: string;
    constructor(
        private blocktypeService: BlockTypeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.blocktypeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select BlockType to remove
     *
     * @param {string} id Id of the BlockType to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected BlockType
     */
    deleteItem() {
        this.blocktypeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
