import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../user-authentication/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  error = null;
  form: FormGroup;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.form = fb.group({
        "username": ["", Validators.required],
        "password": ["", Validators.required]
    });

if (this.authenticationService.currentUserValue) {
  this.router.navigate(["guestUser"]);
}
    }

  ngOnInit() {
  }

  onLoginClick() {

    this.error = null;
    this.loading = true;
     if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.form.controls.username.value, this.form.controls.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  if( data.username === 'admin@gmail.com'){
                    console.log('admin aanu');
                    this.router.navigate(['admin']);
                    
                  } else {
                    this.router.navigate(['guestUser']);
                  }
              
                },
                error => {
                    this.error = error;
                    console.log(error);
                    this.loading = false;
                });
    }
  }
