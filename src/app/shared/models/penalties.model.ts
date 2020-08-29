export interface Penalties{
  type: "pay cut" | "prison" | "on hold";
  total_days: number;
  imposition_date: Date;
  reason: string;
  imposition_officer: string;
}
