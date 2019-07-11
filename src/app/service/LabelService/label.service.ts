import { Injectable } from '@angular/core';
import {HttpService} from '../HttpService/http.service'
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpService:HttpService) { }

  getLabel(){
    return this.httpService.get('noteLabels/getNoteLabelList',true);
  }

}