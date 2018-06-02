import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  
  constructor(private http:HttpClient) { }
  getAllUsersAccount(): any {
   return this.http.get('http://localhost:8080/account/all').toPromise();
  }
}
