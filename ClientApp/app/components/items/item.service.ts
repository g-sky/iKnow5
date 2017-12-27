import { Injectable } from '@angular/core';
import { IItem } from './item';
import { Http, Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPagedResults } from "../../shared/interfaces";

@Injectable()
export class ItemService {
    //private _itemUrl = 'http://localhost:59982/api/items2';
    private _itemUrl = 'http://iknowwebapi.azurewebsites.net/api/items2';

    constructor(private _http: Http) {  }
    //constructor(private _http: HttpClient) {}

    getItems(): Observable<IItem[]> {
        return this._http.get(this._itemUrl)
            .map((response: Response) => <IItem[]>response.json());
    }

    getItemsPage(page: number, pageSize: number): Observable<IPagedResults<IItem[]>> {
        return this._http.get(`${this._itemUrl}/getpage/${page}/${pageSize}`)
            .map((res: Response) => {
                
                //if (res.headers) {
                    //const totalRecords = +res.headers.get('x-inlinecount');
                //var count = res.headers!.get('x-inlinecount');
                
                var count = res.headers!.get('x-inlinecount');
                //var count = res.headers.get('x-inlinecount');

                //if (res.headers == null) return;
                //const totalRecords = +res.headers!.get('x-inlinecount');

                //number totalRecords = 0;
                //let count : number = res.headers!.get('x-inlinecount');
                //number totalRecords = 0;

                let totalRecords: number = 0;
                if (count) {
                    ////const totalRecords = +res.headers.get('x-inlinecount');
                    //let totalRecords: number = +count;
                    totalRecords = +count;
                }
                else {
                    //let totalRecords: number = 100;
                    totalRecords = 100;
                }

                //}
                let items = res.json();
                //this.calculate
                return {
                    results: items,
                    totalRecords: totalRecords
                }
            })
            //.catch(this.handleError);
    }

    //getItems(): IItem[] {
    //    //return [
    //    //         { name: 'abc', roomId: 1, containerId: 1, summary: 'keep for 90 days', CreatedOn: '1213', UpdatedOn: '1213' }
    //    //    ]
    //    this._http.get()
    //     }
}