import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../user-documents/model/account';

@Injectable()
export class AccountService {

 
  constructor(private http:HttpClient) { }
  getAllUsersAccount(): any {
   return this.http.get('http://localhost:8080/api/account/all').toPromise();
  }

    
  addUser(account: Account) {
    this.http.post("http://localhost:8080/api/account/", account).toPromise();
  }

  deleteAccount(account: Account) {
    this.http.post("http://localhost:8080/api/account/delete", account).toPromise();
  }
}
