import { Injectable } from '@angular/core';
import { MemberDailyState } from '@core/models/dailyRoster.model';
import { DailyRosterService } from '@core/services/roster/daily-roster.service';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { TaskData } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskData: TaskData[] = [];

  constructor(private dailyRosterService: DailyRosterService) { }

  private getAvailableSoldiers(date: Date = new Date()): Observable<MemberDailyState[]> {
    return this.dailyRosterService.getDailySeperateRosterReport(date)
    .pipe(
      map(roster => roster.soldiersRoster),
      map(soldierRoster => soldierRoster.filter(soldier => soldier.state === 'Present'))
    )
  }

  getTasks(): Observable<TaskData[]> {
    if (this.taskData.length) {
      return of(this.taskData)
    }

    return this.getAvailableSoldiers().pipe(
      map(soldierRoster => {
        return [
          {
            title: 'Available soldiers',
            taskId: 'allsoldiers',
            soldiers: soldierRoster
          },
          {
            title: 'Gate guards',
            taskId: 'gate',
            soldiers: []
          },
          {
            title: 'Barrack guards',
            taskId: 'barrack',
            soldiers: []
          },
          {
            title: 'Patrol guards',
            taskId: 'patrol',
            soldiers: []
          }
        ]
      })
    )
  }

  saveTaskData(data: TaskData[]): Observable<{message: string}> {
    this.taskData = [...data];
    return of({
      message: 'Daily Tasks Saved successfully!'
    })
    .pipe(delay(500));
  }

}
