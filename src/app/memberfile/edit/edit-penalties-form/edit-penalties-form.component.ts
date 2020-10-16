import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Penalties } from '../../models/penalties.model';
import { penalty_types } from '@shared/options/options';

@Component({
  selector: 'app-edit-penalties-form',
  templateUrl: './edit-penalties-form.component.html',
  styleUrls: ['./edit-penalties-form.component.css']
})
export class EditPenaltiesFormComponent {

  @Input() editForm: FormGroup;
  @Input() penaltiesData: Penalties[];
  penalty_types: string[] = penalty_types;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editForm.addControl('penalties', new FormArray([]));
    this.penaltiesData.forEach( penalty => {
      this.addPenalty();
    });
    this.patchData();
  }

  get penaltyForm(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      total_days: ['', Validators.min(1)],
      imposition_date: ['', Validators.required],
      reason: ['', Validators.required],
      imposition_officer: ['Major Rios Alex', Validators.required]
    });
  }

  private patchData(): void{
    this.editForm.patchValue({
      penalties: this.penaltiesData
    });
  }

  public penaltyFormControls(index: number) {
    const g = this.penalties.controls[index] as FormGroup;
    return g.controls
  }

  public get penalties(): FormArray {
    return <FormArray>this.editForm.get('penalties');
  }

  public addPenalty(): void {
    this.penalties.push(this.penaltyForm);
  }

  public removePenalty(index: number): void {
    this.penalties.removeAt(index);
  }


}
