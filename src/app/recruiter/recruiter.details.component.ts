import {Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Recruiter} from "../app.custom.types";
/**
 * Created by gedionz on 4/10/17.
 */


@Component({
  selector : 'recruiter-details',
  templateUrl : './recruiter.details.component.html',
  styles : ['']
})
export class RecruiterDetailsComponent {

  @Input()
  private recruiter : Recruiter;

  constructor(public activeModal : NgbActiveModal) {

  }
}
