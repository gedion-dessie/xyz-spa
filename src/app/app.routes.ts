import {HomeComponent} from "./homepage/home.component";
import {RouterModule} from "@angular/router";
import {CitiesComponent} from "./city/city.component";
import {ItemsComponent} from "./item/item.component";
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login.component';
import {AdvancedSearchComponent} from "./search/item.search.component";
import {ItemDetailsComponent} from "./item/item.detail.component";


const MY_ROUTES = [
  { path : '', component : HomeComponent},
  { path : 'error/404', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'cities/:state', component : CitiesComponent},
  { path : 'items', component : ItemsComponent},
  { path : 'items/details', component : ItemDetailsComponent},
  { path : 'items/advancedsearch', component : AdvancedSearchComponent},
  { path : 'items/:coords', component : ItemsComponent},
  { path : 'items/:state/:city', component : ItemsComponent},
  { path : 'items/search/:state/:city/:key', component : ItemsComponent},
  { path : '**' ,redirectTo : '/error/404'}
];


export const MyRoutes : ModuleWithProviders = RouterModule.forRoot(MY_ROUTES);
