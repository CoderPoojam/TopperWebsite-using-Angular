import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signinData';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  //User setting/preference
  // isDarkTheme= false;

  // toggleTheme(){
  //   this.isDarkTheme = !this.isDarkTheme;
  // }

  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.email,signInForm.value.password);
    this.auth.authenticate(signInData);
  }

}
