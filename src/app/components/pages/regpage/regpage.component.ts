import { Component, HostListener, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.scss']
})
export class RegpageComponent implements OnInit {
  innerWidth: number;
  large: boolean;
  medium: boolean;
  small: boolean;
  fnVal: boolean;
  lnVal: boolean;
  emVal: boolean;
  pwVal: boolean;
  allFields: boolean;
  emailErr: string;
  createSuccess: boolean;

  constructor(
    public postData:PostsService 
  ) { }
 
  ngOnInit(): void {
    this.fnVal=false;
    this.lnVal=false;
    this.emVal=false;
    this.pwVal=false;
    this.createSuccess=false;
    this.emailErr = "";
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
  register(data){
    this.emailErr = "";
    this.fnVal=false;
    this.lnVal=false;
    this.emVal=false;
    this.pwVal=false;
    this.allFields=false;
    var first_name = data.form.value.first_name;
    var last_name = data.form.value.last_name;
    var email = data.form.value.email;
    var password = data.form.value.password;
    if(!first_name){
      this.fnVal=true;
    }
    if(!last_name){
      this.lnVal=true;
    }
    if(!email){
      this.emVal=true;
    }
    if(!password){
      this.pwVal=true;
    }
    if(this.fnVal==false && this.lnVal==false && this.emVal==false && this.pwVal==false){
      this.allFields=true;
    }
    //console.log(this.allFields);
    if(this.allFields){
      var payload = {
        "password":password,
        "first_name":first_name,
        "last_name":last_name,
        "email":email
      }
      this.postData.registerUser(payload).
        subscribe(
          (result) => {
            var apiResult = result;
            this.createSuccess=true;
          },
          (error) => {
            var errormessage = error
            this.emailErr = errormessage.error.email;
          } 
      );
    }
  }
}
 