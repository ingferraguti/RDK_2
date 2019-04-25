/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE BlockBase PLEASE EDIT ../block.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
import { BlockType } from '../block-type';
import { Role } from '../role';

/**
 * This is the model of Block object
 *
 */
export class BlockBase {

    constructor() { }

    public _id: string;
    public Actyve: Boolean;
    public FontendAPIHook?: string;
    public Settings?: string;
    // Relations BlockType
    public BlockType: BlockType | string;
    // Relations Privileges
    public Privileges: Role | string;
}
