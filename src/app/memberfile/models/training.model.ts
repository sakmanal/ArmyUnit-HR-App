export interface Training{
  type: string;
  start_date: Date;
  complete_date: Date;
  training_unit: string;
  result: "pass" | "fail"
}
