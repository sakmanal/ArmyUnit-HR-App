import { Staff } from '@core/models/staff.model';
import { Personal_info } from './personal_info.model';
import { Shots } from './shots.model';
import { Training } from './training.model';
import { Penalties } from './penalties.model';
import { Medical_info } from './medical_info.model';
import { ClassInfo } from './classInfo.model';

export interface MemberFile extends Staff{
   class_info?: ClassInfo;
   personal_info: Personal_info;
   shots: Shots[];
   training: Training[];
   penalties: Penalties[];
   medical_info: Medical_info;
}

export interface ResolvedMemberFile{
  memeberfile: MemberFile;
  backUrl: string;
}
