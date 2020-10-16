import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContainerComponent implements OnInit {

  pageTitle: string;
  fullnameTitle: string;
  editForm: FormGroup;
  file: MemberFile;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  private createForm(): void {
    this.editForm = this.formBuilder.group({

    });
  }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile): void {
    if (file) {
      console.log(file);
      this.file = file;
      this.fullnameTitle = `${file.rank} ${file.lastName} ${file.firstName}`;
      this.pageTitle = 'Edit member file of: ';
    } else {
      this.pageTitle = 'New member file';
    }
  }

  public onSubmit(): void {
    console.log(this.editForm.valid)
    console.log(this.editForm.value);
  }

}
