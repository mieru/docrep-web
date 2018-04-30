import {CanActivate, Router} from "@angular/router";
import {tokenNotExpired} from "angular2-jwt";
import {Injectable} from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService:AuthService) {
  }

  canActivate() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
