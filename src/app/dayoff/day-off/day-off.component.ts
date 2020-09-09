import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DayoffService } from '../services/dayoff.service';

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.css']
})
export class DayOffComponent implements OnInit {

  dayOffForm: FormGroup;
  loading:boolean = false;

  constructor( private formBuilder: FormBuilder, private dayoffService: DayoffService) {
    this.createForm();
  }

  private createForm() {
    this.dayOffForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      type: ['', Validators.required],
      start_date: ['', Validators.required],
      total_days: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

}
