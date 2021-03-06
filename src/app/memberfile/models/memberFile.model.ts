import { Staff } from '@core/models/staff.model';
import { Personal_info } from './personal_info.model';
import { Shots } from './shots.model';
import { Training } from './training.model';
import { Penalties } from './penalties.model';
import { Medical_info } from './medical_info.model';
import { ClassInfo } from './classInfo.model';
import { _DayOff } from '@core/models/day_off.model';

export interface MemberFile {
   member: Staff;
   days_off: _DayOff[];
   class_info?: ClassInfo;
   personal_info: Personal_info;
   shots: Shots[];
   training: Training[];
   penalties: Penalties[];
   medical_info: Medical_info;
}

