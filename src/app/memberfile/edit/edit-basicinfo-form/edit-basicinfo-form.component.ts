import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staff } from '@core/models/staff.model';
import { class_I, platoon, rank, specialty } from '@shared/options/options';

@Component({
  selector: 'app-edit-basicinfo-form',
  templateUrl: './edit-basicinfo-form.component.html',
  styleUrls: ['./edit-basicinfo-form.component.css']
})
export class EditBasicinfoFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() memberData: Staff;
  classI_types: string[] = class_I;
  platoon_types: string[] = platoon;
  rank_types: string[] = rank;
  specialty_types: string[] = specialty;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('member', this.memberForm);
    if (this.memberData){
      this.patchData();
    }
  }

  private get memberForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      rank: ['', Validators.required],
      MilitaryRegisterNumber: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(5)]],
      platoon: ['', Validators.required],
      class_I: ['', Validators.required],
      specialty: ['', Validators.required],
      armed: [true]
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      member: this.memberData
    });
  }

  public get memberFormControls() {
    const g = this.editForm.get('member') as FormGroup;
    return g.controls
  }

  public setSpecialty(specialties: string[]):void {
     this.memberFormControls.specialty.setValue(specialties);
  }


}
