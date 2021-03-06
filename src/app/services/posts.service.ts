import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl = "https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com/auth/users/"
  loginUrl = "https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com/auth/token/login"

  constructor(
    private http:HttpClient
  ) {

   }
   public registerUser(data){
     return this.http.post(this.postUrl,data);
   }
   public login(data){
    return this.http.post(this.loginUrl,data);
  }
}
