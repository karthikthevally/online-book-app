import { Component } from '@angular/core';
import { AuthenticationService } from './user-authentication/authentication.service';
import { user } from './data-format/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Book App';
  currentUser: user;
  isAuthenticated = false;
  
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.isAuthenticated = true
    });
}
  
  logout() {
    this.authenticationService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['']);
}
}
