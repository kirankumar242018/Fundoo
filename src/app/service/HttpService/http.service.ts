import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  static postRequest: any;
  constructor(private http: HttpClient) { }
  link = environment.baseUrl;


  post(url,data,isTokenReq)
  {
    let header = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    console.log("data");
    return this.http.post(this.link+url,data,isTokenReq?{headers:header}:{});
  }
}
