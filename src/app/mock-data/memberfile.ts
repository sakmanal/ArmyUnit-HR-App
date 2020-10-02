import { staff } from './staff';
import { Staff } from '@core/models/staff.model';
import { Personal_info } from '../memberfile/models/personal_info.model';
import { Shots } from '../memberfile/models/shots.model';
import { Training } from '../memberfile/models/training.model';
import { Penalties } from '../memberfile/models/penalties.model';
import { Medical_info } from '../memberfile/models/medical_info.model';
import { MemberFile } from '../memberfile/models/memberFile.model';
import { ClassInfo } from '../memberfile/models/classInfo.model';
import * as moment from 'moment';

export function createMemberfile(id: string): MemberFile {
  const member: Staff = staff.find(member => member.id == id);

  if (!member){
     console.error('wrong member id')
     return null
  }

  const isSoldier = (rank: string): boolean => {
    return (rank == 'Private' || rank == 'Lance Corporal')
  }

  const shots: Shots[] = [
    {
      date: moment().subtract(4, 'months').subtract(3, 'days').toDate(),
      place: '4th ArmyCamp shooting range',
      gun_type:  member.rank == 'Private'? 'G3A3': 'G3A4',
      distance: 100,
      total_shots: 10,
      success_rate: 0.8
    },
    {
      date: moment().subtract(3, 'months').subtract(10, 'days').toDate(),
      place: '4th ArmyCamp shooting range',
      gun_type:  member.rank == 'Private'? 'G3A3': 'G3A4',
      distance: 300,
      total_shots: 10,
      success_rate: 0.7
    },
    {
      date: moment().subtract(2, 'months').subtract(12, 'days').toDate(),
      place: '5th ArmyCamp shooting range',
      gun_type:  "HK11",
      distance: 300,
      total_shots: 10,
      success_rate: 0.9
    },
    {
      date: moment().subtract(1, 'months').subtract(20, 'days').toDate(),
      place: '5th ArmyCamp shooting range',
      gun_type:  "MG3",
      distance: 400,
      total_shots: 10,
      success_rate: 0.8
    }
  ];

  const penalties: Penalties[] = [
    {
      type: isSoldier(member.rank) ? 'prison' : 'pay cut',
      total_days: isSoldier(member.rank) ? 5 : null,
      imposition_date: moment().subtract(2, 'months').subtract(3, 'days').toDate(),
      reason: 'Orders disobey',
      imposition_officer: 'Major Alex Rios'
    }
  ];
  if (member.rank == 'Major'){
    penalties.length = 0;
  }

  const training: Training[] = [
    {
      type: isSoldier(member.rank) ? 'basic training': 'officer training',
      start_date: moment().subtract(5, 'months').subtract(1, 'days').toDate(),
      complete_date:  moment().subtract(5, 'months').subtract(20, 'days').toDate(),
      training_unit: '5th Infantry Division',
      result: 'pass'
    },
    {
      type: 'advance engineer training',
      start_date: moment().subtract(4, 'months').subtract(1, 'days').toDate(),
      complete_date:  moment().subtract(4, 'months').subtract(25, 'days').toDate(),
      training_unit: '23th Engineer Division',
      result: 'pass'
    },
    {
      type: 'specialty training',
      start_date: moment().subtract(3, 'months').subtract(1, 'days').toDate(),
      complete_date:  moment().subtract(3, 'months').subtract(6, 'days').toDate(),
      training_unit: '25th Cavalay Division',
      result: 'pass'
    }
  ];

  const medical_info: Medical_info = {
    bloodType: 'A+',
    height: 1.80,
    kilos: 80
  }

  const personal_info: Personal_info = {
    fatherName: `${member.lastName} Wesley`,
    motherName: 'Telford Alexandra',
    ID_number: isSoldier(member.rank) ? 'AE 46873': '-',
    place_of_origin: 'Thessaloniki',
    place_of_residence: 'Athens',
    education: isSoldier(member.rank) ? 'Bachelor degree' : 'military school',
    profession: isSoldier(member.rank) ? 'Civil Engineer' : 'military officer',
    home_telephone: '+30-25357-05278',
    personal_telephone: '+30-698-421-3281',
    permanent_address: { address: 'Rebelion St.', number: 26, zip_code: 66100 },
    date_of_birth: isSoldier(member.rank) ? moment().subtract(20, 'years').subtract(5, 'days').toDate() :
                                            moment().subtract(40, 'years').subtract(5, 'days').toDate(),
    age: isSoldier(member.rank) ? 20 : 40,
    brothers_count: 2
  }

  const classInfo: ClassInfo  = {
    training_series: `A' series ${moment().year()}`,
    start_date: moment().subtract(7, 'months').add(5, 'days').toDate(),
    dismissal_date : moment().add(5, 'months').add(5, 'days').toDate(),
    months_of_service: 12
  }

 return {
   ...member,
   personal_info,
   medical_info,
   training,
   penalties,
   shots,
   class_info: isSoldier(member.rank) ? classInfo : null
 }
}
