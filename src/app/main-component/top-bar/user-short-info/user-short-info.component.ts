import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../right-area/login-page/auth.service';
import { User } from '../../right-area/login-page/user';

@Component({
  selector: 'app-user-short-info',
  templateUrl: './user-short-info.component.html',
  styleUrls: ['./user-short-info.component.css']
})
export class UserShortInfoComponent implements OnInit {
  public authenticated:boolean;
  public user:User;
  constructor(public authService:AuthService) {
   this.authenticated = authService.isAuthenticated();
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
