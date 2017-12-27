import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IItem } from './item';
import { ItemService } from './item.service';
import { IPagedResults } from "../../shared/interfaces";
//import { DataFilterService } from './core/data-filter.service';
    
@Component({
    templateUrl: './item-list.component.html',
    providers: [ItemService]
})
export class ItemListComponent implements OnInit {
//export class ItemListComponent {

    public items: IItem[];

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
    }   

    filteredItems: IItem[];

    totalRecords: number;
    pageSize: number = 10;

    //ngOnInit(): void  {
    //    this._itemService.getItems()
    //        .subscribe(itemData => {
    //            this.items = itemData;
    //            this.filteredItems = this.items;
    //        });
    //}
    ngOnInit(): void {
        this.getItemsPage(1);

        //);
    }

    performFilter(filterBy: string): IItem[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.items.filter((item: IItem) =>
            item.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private _itemService: ItemService) { }

    getItemsPage(page: number) {
        //page = 9;
        this._itemService.getItemsPage((page - 1) * this.pageSize, this.pageSize)
        //this._itemService.getItemsPage(1, 7)
            .subscribe((response: IPagedResults<IItem[]>) => {
                this.items = this.filteredItems = response.results;
                this.totalRecords = response.totalRecords;
                //this.totalRecords = 50;
            })
    }

    pageChanged(page: number) {
        this.getItemsPage(page);
    }

  //filterChanged(filterText: string) {
  //  if (filterText && this.items) {
  //      let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
  //      this.filteredItems = this.dataFilter.filter(this.items, props, filterText);
  //  }
  //  else {
  //      this.filteredItems = this.items;
  //  }
  //  }
}