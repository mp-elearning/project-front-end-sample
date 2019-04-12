import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,
              public router : Router
    ) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // const temp=email.split('@')[1].split('.')[0];
    console.log("Hi")

    this.authService.signinUser(email, password);
    this.router.navigate(['blogs'])

  }
}
