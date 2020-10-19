import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shots } from '../../models/shots.model';
import { gun_types } from '@shared/options/options';

@Component({
  selector: 'app-edit-shots-form',
  templateUrl: './edit-shots-form.component.html',
  styleUrls: ['./edit-shots-form.component.css']
})
export class EditShotsFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() shotsData: Shots[];
  gun_types: string[] = gun_types;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('shots', new FormArray([]));
    this.shotsData.forEach( shot => {
      this.addShot();
    });
    this.patchData();
  }

  get shotForm(): FormGroup {
    return this.formBuilder.group({
      date: ['', Validators.required],
      place: [''],
      gun_type: ['', Validators.required],
      distance: ['', [Validators.required, Validators.min(50), Validators.max(1000)]],
      total_shots: ['', [Validators.min(1), Validators.max(500)]],
      success_rate: [0.1, [Validators.required, Validators.min(0), Validators.max(1)]]
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      shots: this.shotsData
    });
  }

  public shotFormControls(index: number) {
    const g = this.shots.controls[index] as FormGroup;
    return g.controls
  }

  public get shots(): FormArray {
    return <FormArray>this.editForm.get('shots');
  }

  public addShot(): void {
    this.shots.push(this.shotForm);
  }

  public removeShot(index: number): void {
    this.shots.removeAt(index);
  }

}
