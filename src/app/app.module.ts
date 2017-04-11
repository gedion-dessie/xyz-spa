import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./homepage/home.component";
import {RecruiterService} from "./services/recruiter.service";
import {RecruiterComponent} from "./recruiter/recruiter.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RecruiterDetailsComponent} from "./recruiter/recruiter.details.component";
import {SaveRecruiterComponent} from "./recruiter/save.recruiter.component";
import {MyRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, RecruiterComponent, RecruiterDetailsComponent, SaveRecruiterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MyRoutes
  ],
  entryComponents : [RecruiterDetailsComponent],
  providers: [RecruiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
