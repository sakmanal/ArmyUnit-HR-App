export interface Staffbasic{
  id: string;
  firstName: string;
  lastName: string;
  rank: string;
  fullnameTitle?: string;
  foto?: string;
}


export interface Staff extends Staffbasic{
  MilitaryRegisterNumber: string;
  platoon: "1st" | "2nd" | "3rd" | "command" | "maintenance";
  class_I: "I1" | "I2" | "I3" | "I4";
  specialty: string[];
  armed?: boolean;
  class_info?: classInfo;
}

interface classInfo{
  training_series: string;
  start_date: Date;
  dismissal_date : Date;
  months_of_service: number;
}


