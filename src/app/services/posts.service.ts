import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = "https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com/"

  constructor(
    private http:HttpClient
  ) {

   }
   public registerUser(data){
     return this.http.post(this.url,data);
   }
}
