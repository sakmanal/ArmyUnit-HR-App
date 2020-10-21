import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personal_info } from '../../models/personal_info.model';

@Component({
  selector: 'app-edit-personalinfo-form',
  templateUrl: './edit-personalinfo-form.component.html',
  styleUrls: ['./edit-personalinfo-form.component.css']
})
export class EditPersonalinfoFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() personalData: Personal_info;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('personal_info', this.personalForm);
    if (this.personalData){
      this.patchData();
    }
  }

  private get personalForm(): FormGroup {
    return this.formBuilder.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      ID_number: [''],
      place_of_origin: ['', Validators.required],
      place_of_residence: ['', Validators.required],
      education: [''],
      profession: [''],
      home_telephone: [''],
      personal_telephone: ['', Validators.required],
      permanent_address: this.formBuilder.group({
        address: ['', Validators.required],
        number: ['', Validators.required],
        zip_code: ['', Validators.required]
      }),
      date_of_birth: ['', Validators.required],
      age: ['', Validators.required],
      brothers_count: ['', Validators.required],
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      personal_info: this.personalData
    });
  }

  public get personalFormControls() {
    const g = this.editForm.get('personal_info') as FormGroup;
    return g.controls
  }
}
