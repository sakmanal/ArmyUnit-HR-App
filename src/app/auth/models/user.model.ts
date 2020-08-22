export interface User{
  id: string;
  firstName: string;
  lastName: string;
  rank: string;
  MilitaryRegisterNumber: string;
  token: string;
  role: "admin" | "private" | "1st_office_officer" | "2nd_office_officer" | "4th_office_officer" | "staff_officer";
  foto?: string;
}
