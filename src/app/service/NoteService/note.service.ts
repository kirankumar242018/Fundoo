import { Injectable } from '@angular/core';
import { HttpService } from "../HttpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService:HttpService) { }

  encode(data) 
    {
      const formBody = [];
      for (const property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      return formBody.join('&');
    }


  addNote(url,body){
    return this.httpService.postEncode(url,this.encode(body),true);
  }
}
