export const rank: string[] = [
  "Private",
  "Lance Corporal",
  "Corporal",
  "Sergeant",
  "Staff Sergeant",
  "Master Sergeant",
  "Warrant Officer",
  "Second Lieutenant",
  "First Lieutenant",
  "Captain",
  "Major",
  "Lieutenant colonel"
]

export const rankIndex: { [key: string]: number } = {
  "Private": 1,
  "Lance Corporal": 2,
  "Corporal": 3,
  "Sergeant": 4,
  "Staff Sergeant": 5,
  "Master Sergeant": 6,
  "Warrant Officer": 7,
  "Second Lieutenant": 8,
  "First Lieutenant": 9,
  "Captain": 10,
  "Major": 11,
  "Lieutenant colonel": 12
}

export const platoon: string[] = ["1st", "2nd", "3rd", "command", "maintenance"]

export const class_I: string[] = ["I1", "I2", "I3", "I4"]

export const specialty: string[] = [
      "Car Driver",
      "Minefield Engineer",
      "Musketeer",
      "Storekeeper",
      "Transmitter Cryptographer",
      "Civil Engineer",
      "Office Clerk",
      "Cook",
      "Boat Driver",
      "Craftsman",
      "Explosion Enginner",
      "Mechanic",
      "Minefield Engineer"
]

export const dayoffTypes: string[] = [
      "regular leave",
      "student leave",
      "short duration leave",
      "special honorary border leave",
      "blood donation leave",
      "sick leave",
      "honorary leave",
      "agricultural leave",
      "oath taking leave"
]

export const gun_types: string[]= [
  "G3A3" ,
  "G3A4" ,
  "pistol 0,45" ,
  "HK11" ,
  "MG3" ,
  "M79"
]

export const penalty_types: string[] = [
  "pay cut",
  "prison",
  "on hold"
]

export const bloodTypes: string[] = [
  "0+" , "0-" , "A+" , "A-" , "B+" , "B-" , "AB+" , "AB-"
]

export const class_series: string[] = [
  "A' series", "B' series", "C' series", "D' series"
]

export const years = (): string[] => {
  const y = []
  for (let i = 2000; i <= 2050; i++){
      y.push(i.toString())
  }
  return y
}

