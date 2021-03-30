import { Component, HostListener, OnInit } from '@angular/core';

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
 
  constructor() { }

  ngOnInit(): void {
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
}
 