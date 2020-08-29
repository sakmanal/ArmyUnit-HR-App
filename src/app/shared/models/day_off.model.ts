export interface Day_off{
  type: "regular leave" |
        "student leave" |
        "short duration leave" |
        "special honorary border permit" |
        "blood donation permit" |
        "sick leave" |
        "honorary leave" |
        "agricultural permit" |
        "oath taking leave";
  total_days: number;
  start_date: Date;
  unit_of_issue: string;
}
