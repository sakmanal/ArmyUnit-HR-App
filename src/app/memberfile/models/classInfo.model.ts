export interface ClassInfo{
  training_series: { class_series: Class_series, class_year: string };
  start_date: Date;
  dismissal_date? : Date;
  months_of_service: number;
}

type Class_series = "A' series" | "B' series" | "C' series" | "D' series"
