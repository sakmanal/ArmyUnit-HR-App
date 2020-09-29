import * as moment from 'moment';
import { Day_off } from '@core/models/day_off.model'

export const daysOff: Day_off[] = [
  {
    id: '0566D17E-C1C9-799B-BE8D-DEFE088A8D7F',
    destination: 'Chania',
    type: 'short duration leave',
    start_date: moment().toDate(),
    end_date: moment().add(3, 'days').toDate(),
    staffmember: {
      staff_id: 'AD9676C1-6EB1-D4C7-3DF8-C7948FF0A094',
      rank: 'Captain',
      fullname: 'Burt Tyrone',
    }
  },
  {
    id: 'E71923B2-90B5-D220-9354-C5F748135A41',
    destination: 'Ioannina',
    type: 'regular leave',
    start_date: moment().toDate(),
    end_date: moment().add(5, 'days').toDate(),
    staffmember: {
      staff_id: 'C976A61E-D103-D06A-2F8A-3514D0973782',
      rank: 'First Lieutenant',
      fullname: 'Martin Abraham',
    }
  },
  {
    id: '6B5F1394-4CAB-5E6B-2C39-867B9500E171',
    destination: 'Thessaloniki',
    type: 'short duration leave',
    start_date: moment().add(3, 'days').toDate(),
    end_date: moment().add(8, 'days').toDate(),
    staffmember: {
      staff_id: '13DF8A6C-14B4-3B04-3B1E-606B0EB6B460',
      rank: 'Warrant Officer',
      fullname: 'Hawkins Ulysses',
    }
  },
  {
    id: '31625747-401A-6E37-A1D2-DBC5C6D8B27D',
    destination: 'Volos',
    type: 'short duration leave',
    start_date: moment().subtract(3, 'days').toDate(),
    end_date: moment().subtract(1, 'days').toDate(),
    staffmember: {
      staff_id: '3F18D72F-FDEF-E9D7-001A-4A84C6AD245F',
      rank: 'Master Sergeant',
      fullname: 'Landry Keaton',
    }
  },
  {
    id: '55608CAD-CD53-ABF2-AEA7-632988844DFA',
    destination: 'Larissa',
    type: 'short duration leave',
    start_date: moment().subtract(3, 'days').toDate(),
    end_date: moment().toDate(),
    staffmember: {
      staff_id: '385E7CC0-D47A-B5FE-0624-0DF3B284A49F',
      rank: 'Master Sergeant',
      fullname: 'Ramsey Zachery',
    }
  },
  {
    id: '76B35BF0-61E9-E2FB-8B1F-17AA756DB884',
    destination: 'Larissa',
    type: 'short duration leave',
    start_date: moment().add(5, 'days').toDate(),
    end_date: moment().add(8, 'days').toDate(),
    staffmember: {
      staff_id: '8F77BBE1-16BC-0880-B3C0-05E0886C1C3B',
      rank: 'Master Sergeant',
      fullname: 'Ruiz Yoshio',
    }
  },
  {
    id: 'E20AEA7F-BAFD-0ACA-8595-1109E191F899',
    destination: 'Thessaloniki',
    type: 'regular leave',
    start_date: moment().add(10, 'days').toDate(),
    end_date: moment().add(16, 'days').toDate(),
    staffmember: {
      staff_id: '9AA59FF6-D5FE-4327-4390-AACEEB6E1A39',
      rank: 'Staff Sergeant',
      fullname: 'Walsh Hasad',
    }
  },
  {
    id: '49F1AF1B-0428-0BCB-4C6B-DDF614FFB5FA',
    destination: 'Drama',
    type: 'regular leave',
    start_date: moment().subtract(18, 'days').toDate(),
    end_date: moment().subtract(10, 'days').toDate(),
    staffmember: {
      staff_id: '22230121-404E-E8C5-B144-1181A6284D50',
      rank: 'Staff Sergeant',
      fullname: 'Cameron Chadwick',
    }
  },
  {
    id: '6F30B176-C2B2-957F-7C36-DE9BBC9E999F',
    destination: 'Drama',
    type: 'regular leave',
    start_date: moment().subtract(20, 'days').toDate(),
    end_date: moment().subtract(10, 'days').toDate(),
    staffmember: {
      staff_id: '7D1D3662-EF8B-6997-5014-A93E87B3AC14',
      rank: 'Staff Sergeant',
      fullname: 'Haney Stuart',
    }
  },
  {
    id: 'CB5FC363-DC2B-38D4-0DEA-839D768155B9',
    destination: 'Ioannina',
    type: 'short duration leave',
    start_date: moment().subtract(4, 'days').toDate(),
    end_date: moment().toDate(),
    staffmember: {
      staff_id: '9A317ABE-A026-FBAA-CC08-7F810265091D',
      rank: 'Staff Sergeant',
      fullname: 'Mcknight Zephania',
    }
  },
  {
    id: '1A0292B9-4A88-8698-95A9-FB214BC94E2E',
    destination: 'Rhodes',
    type: 'regular leave',
    start_date: moment().subtract(25, 'days').toDate(),
    end_date: moment().subtract(20, 'days').toDate(),
    staffmember: {
      staff_id: '6249E48E-23D2-7461-4872-D2D2CDA7DBF6',
      rank: 'Staff Sergeant',
      fullname: 'Morrison Cameron',
    }
  },
  {
    id: '31159FE6-C657-20F0-27E2-97B440B7B6DD',
    destination: 'Drama',
    type: 'regular leave',
    start_date: moment().subtract(5, 'days').toDate(),
    end_date: moment().add(10, 'days').toDate(),
    staffmember: {
      staff_id: 'D584555F-B586-F562-7160-6F9BC3E6E4BB',
      rank: 'Staff Sergeant',
      fullname: 'Grant Caleb',
    }
  },
  {
    id: '429538DE-39B3-38F3-EB51-A637DD287C7E',
    destination: 'Larissa',
    type: 'short duration leave',
    start_date: moment().subtract(2, 'days').toDate(),
    end_date: moment().add(2, 'days').toDate(),
    staffmember: {
      staff_id: '4FB4A95A-8BC8-142B-B613-9CE740934CB1',
      rank: 'Staff Sergeant',
      fullname: 'Weiss Dustin',
    }
  },
  {
    id: '67768386-9C72-4C23-7DFC-D3DE4190AAD5',
    destination: 'Athens',
    type: 'regular leave',
    start_date: moment().add(5, 'days').toDate(),
    end_date: moment().add(15, 'days').toDate(),
    staffmember: {
      staff_id: 'EAD9DBC6-C859-6C20-208F-846433C3324B',
      rank: 'Sergeant',
      fullname: 'Bates Tucker',
    }
  },
  {
    id: '23FA1CC3-DD29-78DD-6B9C-6AC6FB8D140A',
    destination: 'Rhodes',
    type: 'short duration leave',
    start_date: moment().add(18, 'days').toDate(),
    end_date: moment().add(20, 'days').toDate(),
    staffmember: {
      staff_id: 'B289EDCF-3897-F794-2B0D-7961F6B4050A',
      rank: 'Sergeant',
      fullname: 'Reid Lester',
    }
  },
  {
    id: '61F5BA67-F60B-1425-3EB2-11E81F7ADD3C',
    destination: 'Heraklion',
    type: 'regular leave',
    start_date: moment().subtract(10, 'days').toDate(),
    end_date: moment().subtract(3, 'days').toDate(),
    staffmember: {
      staff_id: '8ABDD4F6-C269-8DC1-1E80-30018C841762',
      rank: 'Sergeant',
      fullname: 'Farmer Odysseus',
    }
  },
  {
    id: 'DB4FB5EB-62AA-4226-A2FB-EE164430B04B',
    destination: 'Heraklion',
    type: 'short duration leave',
    start_date: moment().subtract(10, 'days').toDate(),
    end_date: moment().subtract(8, 'days').toDate(),
    staffmember: {
      staff_id: '59BBCD8C-5435-2B53-D035-FC1E3054AD6F',
      rank: 'Sergeant',
      fullname: 'Fisher Ivor',
    }
  },
  {
    id: '2869A528-5993-AF7E-BE14-95B4D14BBF6A',
    destination: 'Heraklion',
    type: 'regular leave',
    start_date: moment().subtract(24, 'days').toDate(),
    end_date: moment().subtract(17, 'days').toDate(),
    staffmember: {
      staff_id: 'CA2FAB97-5BA2-CD1E-22E4-D9D737F23B71',
      rank: 'Sergeant',
      fullname: 'Hahn Ralph',
    }
  },
  {
    id: '011AD98D-89AC-53B7-07B0-8645261CC5C7',
    destination: 'Volos',
    type: 'short duration leave',
    start_date: moment().subtract(11, 'days').toDate(),
    end_date: moment().subtract(8, 'days').toDate(),
    staffmember: {
      staff_id: '00689B1C-72CA-B693-771E-462B4B25F5C8',
      rank: 'Lance Corporal',
      fullname: 'Hayes Lance',
    }
  },
  {
    id: '8878C415-B8AE-4C11-B30A-60B24F4E21E8',
    destination: 'Chania',
    type: 'regular leave',
    start_date: moment().add(13, 'days').toDate(),
    end_date: moment().add(19, 'days').toDate(),
    staffmember: {
      staff_id: '6611E822-8A58-B857-0E34-6E8220A41B94',
      rank: 'Lance Corporal',
      fullname: 'Berg Bruno',
    }
  },
  {
    id: '53E3862B-7894-8B0B-CDC3-DD58AD210DC3',
    destination: 'Ioannina',
    type: 'short duration leave',
    start_date: moment().toDate(),
    end_date: moment().add(4, 'days').toDate(),
    staffmember: {
      staff_id: 'DD22AF2A-72E2-F5D4-53EB-1587FEFBFB7E',
      rank: 'Private',
      fullname: 'Hammond Jack',
    }
  },
  {
    id: '35AE9865-DDCB-2544-BCB6-A562D6725274',
    destination: 'Chania',
    type: 'regular leave',
    start_date: moment().subtract(8, 'days').toDate(),
    end_date: moment().subtract(1, 'days').toDate(),
    staffmember: {
      staff_id: 'E7A7F8ED-FB90-8931-DAA7-A7FD115D3897',
      rank: 'Private',
      fullname: 'Valdez Wayne',
    }
  },
  {
    id: 'F5C44543-DE50-6B96-C19D-3BC11BE2638D',
    destination: 'Rhodes',
    type: 'regular leave',
    start_date: moment().subtract(1, 'days').toDate(),
    end_date: moment().add(5, 'days').toDate(),
    staffmember: {
      staff_id: '8CE98AFC-73FF-5BE5-8693-ACFEA30D37E8',
      rank: 'Private',
      fullname: 'Howard Aquila',
    }
  },
  {
    id: '8147F8A6-F8FB-A75C-69E7-B0CFBF46C014',
    destination: 'Drama',
    type: 'regular leave',
    start_date: moment().add(2, 'days').toDate(),
    end_date: moment().add(8, 'days').toDate(),
    staffmember: {
      staff_id: '49C4B392-E18A-AB82-82D8-A4D6E52EF3D7',
      rank: 'Private',
      fullname: 'Hancock Berk',
    }
  },
  {
    id: '03E70D1A-6BC0-27B0-2E4C-894E8F2991F2',
    destination: 'Chania',
    type: 'regular leave',
    start_date: moment().add(6, 'days').toDate(),
    end_date: moment().add(12, 'days').toDate(),
    staffmember: {
      staff_id: '323C1017-14FA-AD24-0D85-669B001472BF',
      rank: 'Private',
      fullname: 'Martinez David',
    }
  },
  {
    id: '9899C5A7-C445-069A-AD6D-B2F0C10EC7F9',
    destination: 'Rhodes',
    type: 'short duration leave',
    start_date: moment().subtract(6, 'days').toDate(),
    end_date: moment().subtract(3, 'days').toDate(),
    staffmember: {
      staff_id: 'FDFECCCB-8B24-E119-1F65-F6A0ABB7A974',
      rank: 'Private',
      fullname: 'Willis Octavius',
    }
  },
  {
    id: '505360DE-BBBC-A188-843E-3348E14A7204',
    destination: 'Thessaloniki',
    type: 'regular leave',
    start_date: moment().subtract(3, 'days').toDate(),
    end_date: moment().subtract(1, 'days').toDate(),
    staffmember: {
      staff_id: '978CBEAC-F148-5C53-C44A-F225C2F1FD0F',
      rank: 'Captain',
      fullname: 'Gates Russell',
    }
  },
  {
    id: '33CBDA25-896A-19D2-D6E4-C65A88C34202',
    destination: 'Volos',
    type: 'regular leave',
    start_date: moment().add(20, 'days').toDate(),
    end_date: moment().add(26, 'days').toDate(),
    staffmember: {
      staff_id: '65355A15-B53A-9CAA-DD97-EA6DC1B26E1C',
      rank: 'Second Lieutenant',
      fullname: 'Byers Benjamin',
    }
  },
  {
    id: 'E42BBB68-DD01-425E-C224-8E2C6FC629ED',
    destination: 'Larissa',
    type: 'short duration leave',
    start_date: moment().subtract(23, 'days').toDate(),
    end_date: moment().subtract(20, 'days').toDate(),
    staffmember: {
      staff_id: 'CAAC17DF-3254-F09F-9B4E-72D957899FCE',
      rank: 'Sergeant',
      fullname: 'Hanson Judah',
    }
  },
  {
    id: 'E8368C01-E55C-5B8F-249C-12910E56ED33',
    destination: 'Volos',
    type: 'short duration leave',
    start_date: moment().subtract(9, 'days').toDate(),
    end_date: moment().subtract(5, 'days').toDate(),
    staffmember: {
      staff_id: '88316CA8-B123-6145-E73C-7434A1B00D27',
      rank: 'Private',
      fullname: 'Armstrong Octavius',
    }
  },
];
