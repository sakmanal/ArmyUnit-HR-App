export interface Shots{
  date: Date;
  place?: string;
  gun_type: "G3A3" | "G3A4" | "pistol 0,45" | "HK11" | "MG3" | "M79";
  distance: number;
  total_shots?: number;
  success_rate: number;
}
