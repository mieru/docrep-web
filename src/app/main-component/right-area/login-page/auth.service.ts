import {tokenNotExpired} from "angular2-jwt";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Headers, Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import { User } from "./user";


@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(login: string, password: string): Observable<any> {
    return this.http.put('http://localhost:8080/account/login', {
      username: login,
      password: password
    }).map(res => res.text());
  }


  isAuthenticated() {
    return tokenNotExpired('token');
  }

  createCustomerAccountByToken(token: string): User {
    let customerTokenInfo = JSON.parse(atob(token.split(".")[1]));
    let user: User = new User();
    // user.id = customerTokenInfo.customerId;
    user.username = customerTokenInfo.username;
    // user.name = customerTokenInfo.name;
    // user.surname = customerTokenInfo.surname;

    return user;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.reload();
  }
}
