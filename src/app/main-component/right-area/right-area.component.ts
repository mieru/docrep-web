import { Component, OnInit } from '@angular/core';
import { AuthService } from './login-page/auth.service';

@Component({
  selector: 'app-right-area',
  templateUrl: './right-area.component.html',
  styleUrls: ['./right-area.component.css']
})
export class RightAreaComponent implements OnInit {

  public authenticated:boolean;
  constructor(public authService:AuthService) {
   this.authenticated = authService.isAuthenticated();
   }

  ngOnInit() {
  }

}
