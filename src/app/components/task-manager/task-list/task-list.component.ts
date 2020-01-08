import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskService } from '../../../services/task.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList:Task[]=[];

  constructor( private taskService: TaskService, private msgService: MessageService) {
    
   }

  ngOnInit() {
   this.getTasks();
   this.msgService.getMsg().subscribe((data)=>{
     this.getTasks();
   });
  }

  getTasks()
  {
    this.taskService.getTask().subscribe((data) =>{
      this.taskList=data;
    });
  }
}
