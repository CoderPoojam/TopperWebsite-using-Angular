import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';
// import { SignInData } from 'src/app/model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData('pooja@gmail.com','pooja@123');
  isAuthenticated= false;
  constructor(private router:Router) { }

  authenticate(signInData:SignInData):boolean{
   if(this.checkCredentials(signInData)){
     this.isAuthenticated = true;
     this.router.navigate(['admin-home']);
     return true;
   }
   this.isAuthenticated =false;
   return false;
  }

  private checkCredentials(signInData:SignInData):boolean{
   return this.chechEmail(signInData.getEmail()) && this.chechPassword(signInData.getPassword());
  }

  private chechEmail(email:string):boolean{
    return email === this.mockedUser.getEmail();
  }

  private chechPassword(password:string):boolean{
    return password === this.mockedUser.getPassword();
  }

  logout(){
    this.isAuthenticated=false;
    this.router.navigate(['signin']);
  }

}
