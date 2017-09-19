import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersLogin } from './users_login';

@Injectable()
export class LoginService {
  connection = 'http://localhost:3000/api/login';

  constructor(private http: Http, private router: Router) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });



  save(data): Observable<any> {
    console.log(data);
    this.http.post(this.connection, data, { headers: this.headers }).subscribe((result) => {
      if (result.status == 200) {
        //console.log(result["_body"])
        localStorage.setItem('user_token', result["_body"]);
        alert("Login successfully!!!!!!!!!!!")

        // this.router.navigate(['/userDash']);
      }
      if (result.status == 299) {
        alert("Enter valid username or password")
        //this.router.navigate(['/login']);
      }

    });
    return;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
