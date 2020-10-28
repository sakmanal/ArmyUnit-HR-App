export interface Weather {
   isDay: boolean;
   temp_celcius: number;
   temp_min: number;
   temp_max: number;
   temp_feels_like: number;
   name: string;
   humidity: number;
   description?: string;
   icon?: string;
}
