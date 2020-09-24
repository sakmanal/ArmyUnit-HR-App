import { DailyRoster } from '../models/dailyRoster.model';

export interface DailyRosterDoc{
  date: Date;
  roster: DailyRoster;
}
