//import { Component, Output, EventEmitter } from '@angular/core';

//@Component({
//    selector: 'filter-textbox',
//    template: `
//    <form>
//        Filter:
//    <input type="text" name="filter" 
//        [(ngModel)]="model.filter"
//        (keyup)="filterChanged($event)" />
//    </form>
//    `
//})
//export class FilterTextboxComponent {

//    model: { filter: string } = { filter: '' };

//    @Output()
//    changed: EventEmitter<string> = new EventEmitter<string>();

//    filterChanged(event: any) {
//        event.preventdefault();
//        this.changed.emit(this.model.filter); //raise changed event
//    }
//}
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    
  selector: 'filter-textbox',
  template: `
    <form>
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `
})
export class FilterTextboxComponent {

  
    model: { filter: string } = { filter: '' };
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); //Raise changed event
    }
}