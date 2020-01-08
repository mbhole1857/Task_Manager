import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  tasks :Task;

  constructor(private route:ActivatedRoute,private taskService:TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.taskService.getSingleTask(data.id).subscribe((task)=>{
        this.tasks=task;
      });
    })
  }

}
