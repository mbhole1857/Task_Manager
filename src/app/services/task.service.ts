import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string='http://localhost:3000/tasks';


  constructor(private http:HttpClient) { }

  getSingleTask(id:number):Observable<Task>{
    return this.http.get<Task>(this.url+'/'+id);
  }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  addTask(tt:string):Observable<Task>{
    const newTask={
      title:tt,
      status:false,
      date:new Date()
    }
    return this.http.post<Task>(this.url,newTask);
  }

  removeTask(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
