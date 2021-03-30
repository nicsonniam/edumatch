import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  innerWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])  
    onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }
}
