import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject=new Subject();

  constructor() { }

  setMsg(msg:string){
    this.subject.next(msg);
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
