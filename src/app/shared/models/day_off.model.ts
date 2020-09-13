export interface Day_off{
  id: string;
  type: "regular leave" |
        "student leave" |
        "short duration leave" |
        "special honorary border permit" |
        "blood donation permit" |
        "sick leave" |
        "honorary leave" |
        "agricultural permit" |
        "oath taking leave";
  end_date: Date;
  start_date: Date;
}
