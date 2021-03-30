import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { LoginpageComponent } from './components/pages/loginpage/loginpage.component';
import { RegpageComponent } from './components/pages/regpage/regpage.component';
import { NotfoundpageComponent } from './components/pages/notfoundpage/notfoundpage.component';
import { PagesModule } from './components/pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: LandingpageComponent
      },
      {
        path: 'login', 
        component: LoginpageComponent
      },
      {
        path: 
        'registration' ,
        component: RegpageComponent
      },
      {
        path: 
        '**' ,
        component: NotfoundpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
