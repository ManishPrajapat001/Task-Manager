import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output ,inject} from '@angular/core';
import { AppComponent } from '../../app.component';
import { CardComponent } from "../../shared/card/card.component";
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [AppComponent, CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }
}
