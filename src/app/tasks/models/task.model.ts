import { MemberDailyState } from '@core/models/dailyRoster.model';


export interface TaskData {
  title: string;
  taskId: string;
  description?: string;
  maxItems?: number;
  soldiers: MemberDailyState[];
}
