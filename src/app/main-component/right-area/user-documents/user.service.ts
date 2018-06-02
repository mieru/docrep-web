import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './model/account';

@Injectable()
export class UserService {

 
 
  constructor(private http: HttpClient) { }

  changePassword(oldPassword: string, newPassword: string, repeatedPassword: string) {
    this.http.post("http://localhost:8080/api/account/changePassword", {oldPassword:oldPassword, newPassword:newPassword, repeatedPassword:repeatedPassword}).toPromise();
  }

  editAccount(account: Account): any {
    this.http.post("http://localhost:8080/api/account/", account).toPromise();
  }

  getUserInfo(){
    return this.http.get("http://localhost:8080/api/account/logged").toPromise();
  }
}
