import { Injectable } from '@angular/core';
import { HttpService } from "../HttpService/http.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  registerService(url,body){
    return this.http.post(url,body,false);
  }
  loginService(url,body){
    return this.http.post(url,body,false);
  }
  resetService(url,body){
    return this.http.post(url,body,true);
  }
  forgotService(url,body){
    return this.http.post(url,body,false);
  }
}
