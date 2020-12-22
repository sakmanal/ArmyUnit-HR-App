import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskManagerService } from '../services/task-manager.service';
import { TaskData } from '../models/task.model';
import { MemberDailyState as soldier } from '@core/models/dailyRoster.model';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent  implements OnInit {

  tasks: TaskData[];
  loading: boolean;
  avatarFoto:string = '../../../assets/images/Useravatar.jpg';

  constructor(private taskManagerService: TaskManagerService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loading = true;
    this.taskManagerService.getTasks().subscribe(
      (taskData: TaskData[]) => {
        this.loading = false;
        this.tasks = taskData;
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )
  }

    /**
   * An array of all task ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  get taskIds(): string[] {
    return this.tasks.map(task => task.taskId);
  }

  onTalkDrop(event: CdkDragDrop<soldier[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given soldier to the target data array. This happens if
    // a soldier has been dropped on a different task.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    }
  }

  onTrackDrop(event: CdkDragDrop<TaskData[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  submitTasks(): void {
    console.log(this.tasks);
    this.taskManagerService.saveTaskData(this.tasks).subscribe(
      (res) => this.notificationService.showSuccess(res.message),
      (error) => this.notificationService.showError(error)
    )
  }
}
