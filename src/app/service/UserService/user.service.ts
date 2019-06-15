import { Injectable } from '@angular/core';
import { HttpService } from "../HttpService/http.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  registerService(url,body){
    return this.http.postRequest(url,body);
  }
  loginService(url,body){
    return this.http.postRequest(url,body);
  }
}
