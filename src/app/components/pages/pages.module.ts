import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { RegpageComponent } from './regpage/regpage.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';


 
@NgModule({
  declarations: [
    LandingpageComponent,
    LoginpageComponent,
    RegpageComponent,
    NotfoundpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
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
  ]
})
export class PagesModule { }
