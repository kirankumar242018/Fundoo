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
  postRequest(url,data)
  {
    let header = new HttpHeaders({
      'Accept': 'application/json',
      // 'Authorization': localStorage.getItem('token')
    });
    console.log("data");
    return this.http.post(this.link+url,data,{headers:header});
  }

  post(url,data)
  {
    let header = new HttpHeaders({
      'Accept': 'application/json',
      // 'Authorization': localStorage.getItem('token')
    });
    console.log("data");
    return this.http.post(this.link+url,data,{headers:header});
  }
}
