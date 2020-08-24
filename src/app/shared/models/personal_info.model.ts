export interface personal_info{
    fatherName: string;
    motherName: string;
    ID_number: string;
    place_of_origin: string;
    place_of_residence:string;
    education?: string;
    profession?: string;
    home_telephone?: number;
    personal_telephone: number;
    register_male: string;
    permanent_address: { address: string, number: number, zip_code: number}
    date_of_birth: Date;
    age: number;
    brothers_count: number;
}

