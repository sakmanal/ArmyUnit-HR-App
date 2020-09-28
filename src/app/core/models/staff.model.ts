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
}



