import { tokenNotExpired } from "angular2-jwt";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<any> {
    return this.http.put('http://localhost:8080/account/login', {
      username: login,
      password: password
    }, {responseType: 'text'})
  }


  isAuthenticated() {
    return tokenNotExpired('token');
  }

  createCustomerAccountByToken(token: string): User {
    let customerTokenInfo = JSON.parse(atob(token.split(".")[1]));
    let user: User = new User();
    user.id = customerTokenInfo.user_id;
    user.username = customerTokenInfo.username;

    return user;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.reload();
  }
}
