import { Platoon } from '@core/models/staff.model';

export type MemberDailyState = {
  rank: string;
  fullname: string;
  state: string;
  foto?: string;
  id: string;
  platoon?: Platoon;
}

export type DailyRosterReport = {
  count_total: number;
  count_present: number;
  count_unpresent: number;
}

export interface DailyRoster {
  soldiersRoster: MemberDailyState[];
  officersRoster: MemberDailyState[];
  report: DailyRosterReport;
}

