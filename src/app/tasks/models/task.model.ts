import { MemberDailyState } from '@core/models/dailyRoster.model';


export interface TaskData {
  title: string;
  taskId: string;
  description?: string;
  soldiers: MemberDailyState[];
}
