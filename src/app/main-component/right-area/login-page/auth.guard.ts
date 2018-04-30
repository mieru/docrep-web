import {CanActivate, Router} from "@angular/router";
import {tokenNotExpired} from "angular2-jwt";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    if (tokenNotExpired()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
