import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from '../../models/training.model';

@Component({
  selector: 'app-edit-training-form',
  templateUrl: './edit-training-form.component.html',
  styleUrls: ['./edit-training-form.component.css']
})
export class EditTrainingFormComponent implements OnInit {

  @Input() editForm: FormGroup;
  @Input() trainingData: Training[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('training', new FormArray([]));
    this.trainingData.forEach( training => {
      this.addTraining();
    });
    this.editForm.patchValue({
      training: this.trainingData
    });
    this.trainings.controls[0].patchValue({dates: {start_date: this.trainingData[0].dates.start_date, end_date: this.trainingData[0].dates.complete_date}})
    this.trainings.controls[1].patchValue({dates: {start_date: this.trainingData[1].dates.start_date, end_date: this.trainingData[1].dates.complete_date}})
    this.trainings.controls[2].patchValue({dates: {start_date: this.trainingData[2].dates.start_date, end_date: this.trainingData[2].dates.complete_date}})
  }

  get trainingForm(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      training_unit: ['', Validators.required],
      dates: [],
      result: ['pass', Validators.required]
    });
  }

  public get trainingFormControls() { return this.trainingForm.controls; }

  public get trainings(): FormArray {
    return <FormArray>this.editForm.get('training');
  }

  public addTraining(): void {
    this.trainings.push(this.trainingForm);
  }

  public removeTraining(index: number): void {
    this.trainings.removeAt(index);
  }

}
