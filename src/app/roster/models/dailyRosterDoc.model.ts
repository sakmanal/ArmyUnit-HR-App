import { DailyRoster } from '@core/models/dailyRoster.model';

export interface DailyRosterDoc{
  date: Date;
  roster: DailyRoster;
}
