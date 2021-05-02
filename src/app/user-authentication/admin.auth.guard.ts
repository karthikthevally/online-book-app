import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthdGuard implements CanActivate {
  constructor(  private router: Router, private authenticationService: AuthenticationService){    
  }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authenticationService.currentUserValue.username.toLowerCase().startsWith('admin')) { //can be given unique admin id
        return true;
      }
      this.router.navigate(['/login']);
      return false;      
  }
}
