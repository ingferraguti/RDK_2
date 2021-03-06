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
 *  FOR CUSTOMIZE typeBaseService PLEASE EDIT ../type.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Type } from '../../domain/rapi-dev-kit_db/type';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Type.service.ts
 */

/*
 * SCHEMA DB Type
 *
	{
		Name: {
			type: 'String'
		},
		Schema: {
			type: 'String'
		},
		Validation: {
			type: 'String'
		},
		Visualization: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		ItemType: {
			type: Schema.ObjectId,
			ref : "Block"
		},
		Type: {
			type: Schema.ObjectId,
			required : true,
			ref : "Item"
		},
	}
 *
 */
@Injectable()
export class TypeBaseService {

    contextUrl: string = environment.endpoint + '/types';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * TypeService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Type): Observable<Type> {
        return this.http
            .post<Type>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * TypeService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TypeService.findByName
    *   @description CRUD ACTION findByName
    *   @param Objectid key Id of the resource Name to search
    *
    */
    findByName(id: string): Observable<Type[]> {
        return this.http
            .get<Type[]>(this.contextUrl + '/findByName/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TypeService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Type> {
        return this.http
            .get<Type>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TypeService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Type[]> {
        return this.http
            .get<Type[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * TypeService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Type): Observable<Type> {
        return this.http
            .post<Type>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
