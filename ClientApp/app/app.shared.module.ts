import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpModule2 } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ItemListComponent } from './components/items/item-list.component';
//import { ItemsGridComponent } from './components/items/items-grid.component';
//import { FilterTextboxComponent } from './shared/filter-textbox/filter-textbox.component';
import { PaginationComponent } from './components/items/pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ItemListComponent
        //ItemsGridComponent
        //, FilterTextboxComponent
        , PaginationComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        //HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'item-list', component: ItemListComponent }
            , { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
