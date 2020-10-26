export interface Staffbasic{
  id: string;
  firstName: string;
  lastName: string;
  rank: string;
  fullnameTitle?: string;
  foto?: string;
  platoon: Platoon;
}


export interface Staff extends Staffbasic{
  MilitaryRegisterNumber: string;
  class_I: "I1" | "I2" | "I3" | "I4";
  specialty: string[];
  armed?: boolean;
}

export type Platoon = "1st" | "2nd" | "3rd" | "command" | "maintenance";



