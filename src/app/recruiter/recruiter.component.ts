import {Component, OnDestroy} from "@angular/core";
import {RecruiterService} from "../services/recruiter.service";
import {Subscription} from "rxjs";
import {REST_BASE_URL} from "../app.constants";
import {Response} from "@angular/http";
import {Recruiter} from "../app.custom.types";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RecruiterDetailsComponent} from "./recruiter.details.component";
import {Router} from "@angular/router";
/**
 * Created by gedionz on 4/10/17.
 */


@Component({
  selector : 'recruiter',
  templateUrl : './recruiter.component.html',
  styles : ['']
})
export class RecruiterComponent implements  OnDestroy {
  private title = "Our beloved recruiters!";
  private apiUrl = `${REST_BASE_URL}/recruiters`;
  private recruiterSubscription : Subscription;
  private recruiters : Array<Recruiter> = new Array();

  constructor(private recruiterService : RecruiterService, private modalService : NgbModal, private router : Router) {
    this.recruiterSubscription = this.recruiterService
      .getAllRecruiters(this.apiUrl)
      .subscribe(
        (response : Response) => {
          let jsonArray = response.json();
          for(let element of jsonArray) {
            this.recruiters.push(element);
          }
        }
      );
  }

  selectRecruiter(id : number) : void {
    this.recruiterService.getRecruiter(`${this.apiUrl}/${id}`)
      .subscribe(
        (response : Response) => {
          const recruiter = response.json();
          const modalRef = this.modalService.open(RecruiterDetailsComponent);
          modalRef.componentInstance.recruiter = recruiter;
        }
      );
  }

  addNewRecruiter() : void{
    this.router.navigate(['recruiters', 'save']);
  }

  ngOnDestroy() {
    if(this.recruiterSubscription != null) {
      this.recruiterSubscription.unsubscribe();
    }
  }
}
