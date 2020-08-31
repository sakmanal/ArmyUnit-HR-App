export interface tableData {
  id: string;
  fullname:string;
  rank: string;
  platton: "1st" | "2nd" | "3rd" | "command" | "maintenance"
  militaryID:string;
  class_I: "I1" | "I2" | "I3" | "I4";
  specialty: string;
}
