import {Component, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Recruiter} from "../app.custom.types";
import {RecruiterService} from "../services/recruiter.service";
import {Subscription} from "rxjs";
import {REST_BASE_URL} from "../app.constants";
import {Router} from "@angular/router";
/**
 * Created by gedionz on 4/10/17.
 */

@Component({
  selector : 'save-recruiter',
  templateUrl : './save.recruiter.component.html',
  styles : ['']
})
export class SaveRecruiterComponent implements OnDestroy {
  private title = "Add new recruiter";
  private apiUrl = `${REST_BASE_URL}/recruiters`;
  private recruiterForm : FormGroup;
  private recruiterSubscription : Subscription;
  constructor(private formBuilder : FormBuilder, private recruiterService : RecruiterService, private router : Router) {
    this.recruiterForm = this.formBuilder.group(
      {
        'street' : [],
        'city' : [],
        'zipCode' : [],
        'state' : [],
        'firstName' : [],
        'lastName' : [],
        'email' : [],
        'phoneNumber': [],
        'officePhoneNumber': [],
        'extension' : [],
        'office' : []
      }
    );
  }

  onFormSubmit() :void {
    const formValue = this.recruiterForm.value;

    const recruiter : Recruiter = {
      id : null,
      person : {
        firstName : formValue.firstName,
        lastName : formValue.lastName,
        email : formValue.email,
        phoneNumber : formValue.phoneNumber,
        address : {
          street : formValue.street,
          city : formValue.city,
          zipCode : formValue.zipCode,
          state : formValue.state
        }
      },
      office : formValue.office,
      officePhoneNumber : formValue.officePhoneNumber,
      extension : formValue.extension
    };
    this.recruiterSubscription = this.recruiterService
      .saveRecruiter(this.apiUrl, recruiter)
      .subscribe(
        (response) => {
          this.router.navigate(['recruiters']);
        }
      );
  }

  ngOnDestroy() {
    if(this.recruiterSubscription != null) {
      this.recruiterSubscription.unsubscribe();
    }
  }
}
