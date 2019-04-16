import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { BlockService } from '../../services/block.service';
// Import Models
import { Block } from '../../domain/rapi-dev-kit_db/block';

// START - USED SERVICES
/**
* BlockService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* BlockService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Block
 * @class BlockListComponent
 */
@Component({
    selector: 'app-block-list',
    templateUrl: './block-list.component.html',
    styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
    list: Block[];
    search: any = {};
    idSelected: string;
    constructor(
        private blockService: BlockService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.blockService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Block to remove
     *
     * @param {string} id Id of the Block to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Block
     */
    deleteItem() {
        this.blockService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
