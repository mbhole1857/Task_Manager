import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../../models/task';
import { TaskService } from '../../../../services/task.service';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem:Task;

  constructor( private taskService:TaskService, private msgService:MessageService) { }

  ngOnInit() {
  }

  removeItem()
  {
    this.taskService.removeTask(this.taskItem.id).subscribe((data)=>{
      this.msgService.setMsg('Nothing Nothing!');
    });
  }

}
