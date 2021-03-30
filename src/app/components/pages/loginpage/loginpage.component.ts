import { Component, HostListener, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  innerWidth: number;
  large: boolean;
  medium: boolean;
  small: boolean;
  emVal: boolean;
  pwVal: boolean;
  allFields: boolean;
  loginSuccess: boolean;
  errMessage: string;
 
  constructor(
    public postData:PostsService
  ) { }

  ngOnInit(): void {
    this.errMessage="";
    this.emVal=false;
    this.loginSuccess=false;
    this.pwVal=false;
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>=1366){
      this.large=true;
      this.medium=false;
      this.small=false;
    }else if(this.innerWidth>=768 && this.innerWidth<1366){ 
      this.large=false;
      this.medium=true;
      this.small=false;
    }else if(this.innerWidth<768){
      this.large=false;
      this.medium=false;
      this.small=true;
    }
  }
  logIn(data){
    this.emVal=false;
    this.pwVal=false;
    this.loginSuccess=false;
    this.allFields=false;
    var email = data.form.value.email;
    var pass = data.form.value.password;
    if(!email){
      this.emVal=true;
    }
    if(!pass){
      this.pwVal=true;
    }
    if(this.emVal==false&&this.pwVal==false){
      this.allFields=true;
    }
    if(this.allFields){
      var payload = {
        email:email,
        password:pass
      }
      this.postData.login(payload).
        subscribe(
          (result) => {
            var apiResult = result;
            this.loginSuccess=true;
            alert("Logged in successfully");
          },
          (error) => {
            var errormessage = error
            this.errMessage = errormessage.error.non_field_errors;
          } 
      );
    }
  }
   @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>=1366){
      this.large=true;
      this.medium=false;
      this.small=false;
    }else if(this.innerWidth>=768 && this.innerWidth<1366){
      this.large=false;
      this.medium=true;
      this.small=false;
    }else if(this.innerWidth<768){
      this.large=false;
      this.medium=false;
      this.small=true;
    }
  }
}
 