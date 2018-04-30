import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../right-area/login-page/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
@Input() hideTexts:boolean;
public authenticated:boolean;
constructor(public authService:AuthService) {
 this.authenticated = authService.isAuthenticated();
 }

  ngOnInit() {
  }

}
