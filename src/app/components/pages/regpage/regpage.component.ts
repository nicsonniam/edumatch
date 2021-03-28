import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.scss']
})
export class RegpageComponent implements OnInit {

  constructor(
    public postData:PostsService
  ) { }

  ngOnInit(): void {
  }
  register(data){
    /* this.postData.registerUser(data.form.value).subscribe((result=>{
      var apiResult = result;
      console.log(apiResult);
    })); */
    //console.log(data.form.value);
  }
}
 