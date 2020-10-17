import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medical_info } from '../../models/medical_info.model';
import { bloodTypes } from '@shared/options/options';

@Component({
  selector: 'app-edit-medicalinfo-form',
  templateUrl: './edit-medicalinfo-form.component.html',
  styleUrls: ['./edit-medicalinfo-form.component.css']
})
export class EditMedicalinfoFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() medicalData: Medical_info;
  bloodTypes: string[] = bloodTypes;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('medical_info', this.medicalForm);
    this.patchData();
  }

  private get medicalForm(): FormGroup {
    return this.formBuilder.group({
      bloodType: ['', Validators.required],
      height: ['', [Validators.max(3), Validators.min(1)]],
      kilos: ['', [Validators.max(250), Validators.min(40)]],
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      medical_info: this.medicalData
    });
  }

  public get medicalFormControls() {
    const g = this.editForm.get('medical_info') as FormGroup;
    return g.controls
  }

}
