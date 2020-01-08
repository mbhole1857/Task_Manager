import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  formSubmitted:boolean=false;
  taskTitle:string='';

  constructor(private taskService:TaskService, private msgService:MessageService) { }

  ngOnInit() {
    
  }

  addTask(event){
    this.formSubmitted=true;
    event.preventDefault();
    if(this.taskTitle!==''){
      this.taskService.addTask(this.taskTitle).subscribe((data)=>{
        this.msgService.setMsg('Something something!');
      });
      this.taskTitle=''
      this.formSubmitted=false;
    }
  }

}
