export type MemberDailyState = {
  rank: string;
  fullname: string;
  state: string;
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

