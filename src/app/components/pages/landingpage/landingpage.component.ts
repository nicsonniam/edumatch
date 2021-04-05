import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  innerWidth: number; 

  constructor() { }

  ngOnInit(): void { 
    this.innerWidth = window.innerWidth;
  }
   
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    //console.log(this.innerWidth);
  }
}
