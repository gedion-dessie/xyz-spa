import {HomeComponent} from "./homepage/home.component";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {RecruiterComponent} from "./recruiter/recruiter.component";
import {SaveRecruiterComponent} from "./recruiter/save.recruiter.component";



const MY_ROUTES = [
  { path : '', component : HomeComponent},
  { path : 'recruiters', component : RecruiterComponent},
  { path : 'recruiters/save', component : SaveRecruiterComponent},
  { path : '**' ,redirectTo : ''}
];


export const MyRoutes : ModuleWithProviders = RouterModule.forRoot(MY_ROUTES);
