import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '@core/services/confirm-dialog/confirm-dialog.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContainerComponent implements OnInit, AfterViewInit {

  pageTitle: string;
  fullnameTitle: string;
  editForm: FormGroup;
  file: MemberFile;
  initFormValue: any;
  load: boolean;

  constructor(private formBuilder: FormBuilder,
              private confirmDialogService: ConfirmDialogService,
              private router: Router,
              private cdr: ChangeDetectorRef, // manually update View when changeDetection -> OnPush (e.g this.load = true; this.cdr.detectChanges())
              private notificationService: NotificationService,
              private route: ActivatedRoute) {
    this.createForm();
  }

  private createForm(): void {
    this.editForm = this.formBuilder.group({});
  }

  public get loading(): boolean {
     return this.load
  }

  public set loading(val: boolean) {
    this.load = val
  }

  public get isDirty(): boolean {
    //  * bug(matStartDate,matEndDate): matStartDate & matEndDate in mat-date-range-input
    //    are touched and dirty from the beginning, so 'editForm.dirty' returns always true
    //  * also, with 'editForm.dirty' form will stay dirty even if the user re-selects the
    //    initial form values.
    // return this.editForm.dirty

    return JSON.stringify(this.initFormValue) !== JSON.stringify(this.editForm.value);
  }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  ngAfterViewInit(){
    this.initFormValue = this.editForm.value;
  }

  private onFileRetrieved(file: MemberFile): void {
    if (file && file.member) {
      console.log("file", file);
      this.file = file;
      this.fullnameTitle = `${file.member.rank} ${file.member.lastName} ${file.member.firstName}`;
      this.pageTitle = 'Edit member file of: ';
    } else {
      this.file = file;
      this.pageTitle = 'New member file';
    }
  }

  public onSubmit(): void {
    console.log(this.editForm.valid, this.isDirty)
    //console.log(this.editForm.value);
  }

  public getInValid(formCtrl: string){
      try {
        return this.editForm.get(formCtrl).invalid;
      } catch (error) {
        // console.error(`NO formControl with name ${formCtrl}`)
        return false
      }
  }

  private mapFile(file): MemberFile{
    return {
      ...file,
      training: file.training.map(
        d => {
          return {
            ...d,
            dates: {
              start_date: d.dates.start_date,
              complete_date: d.dates.end_date
            }
          }
        }
      )
    }
  }

}
