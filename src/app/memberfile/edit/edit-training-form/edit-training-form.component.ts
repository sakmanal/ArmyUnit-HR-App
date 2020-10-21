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
    this.patchData();
  }

  get trainingForm(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      training_unit: ['', Validators.required],
      dates: [],
      result: ['pass', Validators.required]
    });
  }

  private patchData(){
    /* 1st way */
    // this.editForm.patchValue({
    //   training: this.trainingData
    // });
    // for(let i=0; i<this.trainings.length; i++){
    //   this.trainings.controls[i].patchValue({
    //     dates: {
    //             start_date: this.trainingData[i].dates.start_date,
    //             end_date: this.trainingData[i].dates.complete_date
    //           }
    //   }, {emitEvent: false})
    // }

    /* 2nd way */
    const data = this.trainingData.map(
      (d: Training) => {
        return {
          ...d,
          dates: {
            start_date: d.dates.start_date,
            end_date: d.dates.complete_date
          }
        }
      }
    )
    this.editForm.patchValue({
      training: data
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
