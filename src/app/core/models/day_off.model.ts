export interface _DayOff {
  id: string;
  type: dayoffType;
  end_date: Date;
  start_date: Date;
  destination: string;
}

export interface Day_off extends _DayOff{
  staffmember: Staffmember;
}

type Staffmember = {
  staff_id: string;
  rank?: string;
  fullname?: string;
}

type dayoffType = "regular leave" |
                  "student leave" |
                  "short duration leave" |
                  "special honorary border permit" |
                  "blood donation permit" |
                  "sick leave" |
                  "honorary leave" |
                  "agricultural permit" |
                  "oath taking leave";
