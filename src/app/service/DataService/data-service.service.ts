import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  
  changeMessage(title: string,description:string) {
    this.messageSource.next(title)
    this.messageSource.next(description)

  }
}
