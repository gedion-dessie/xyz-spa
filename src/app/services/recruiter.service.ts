import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Recruiter} from "../app.custom.types";
/**
 * Created by gedionz on 4/9/17.
 */


@Injectable()
export class RecruiterService {

  constructor(private http : Http) {

  }

  getRecruiter(url : string) : Observable<Response> {
    return this.http.get(url);
  }

  getAllRecruiters(url : string) : Observable<Response> {
    return this.http.get(url);
  }

  saveRecruiter(url : string, recruiter : Recruiter) : Observable<Response> {
    return this.http.post(url, recruiter);
  }
}
