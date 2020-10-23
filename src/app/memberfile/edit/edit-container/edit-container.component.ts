import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '@core/services/confirm-dialog/confirm-dialog.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { MemberfileService } from '../../services/memberfile.service';
import { PreviousCurrentUrlService } from '@core/services/routes-url/previousCurrentUrl.service';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContainerComponent implements OnInit, AfterViewInit {

  pageTitle: string;
  fullnameTitle: string;
  editForm: FormGroup;
  file: MemberFile;
  initFormValue: any;
  load: boolean;
  backUrl: string;

  constructor(private formBuilder: FormBuilder,
              private confirmDialogService: ConfirmDialogService,
              private router: Router,
              private PreviousCurrentUrlService: PreviousCurrentUrlService,
              private memberfileService: MemberfileService,
              private cdr: ChangeDetectorRef,
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
    this.backUrl = this.PreviousCurrentUrlService.preUrl;
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  ngAfterViewInit(){
    this.initFormValue = this.editForm.value;
    this.cdr.detectChanges();
  }

  private onFileRetrieved(file: MemberFile): void {
    this.file = file;
    if (file.member.id !== '0') {
      this.fullnameTitle = `${file.member.rank} ${file.member.lastName} ${file.member.firstName}`;
      this.pageTitle = 'Edit member file of: ';
    } else {
      this.pageTitle = 'New member file';
    }
  }

  public onSubmit(): void {
    // console.log(this.editForm.valid, this.isDirty)
     console.log(this.editForm.value);
    const file: MemberFile = this.mapFile(this.editForm.value)
    this.onSave(file).subscribe(
        (file) => {
          this.loading = false;
          // manually update View when changeDetection -> OnPush
          // this.cdr.detectChanges();
          this.notificationService.showSuccess('File saved successfully');
          // to make form not dirty and pass the edit-guard
          this.initFormValue = {...this.editForm.value}
          this.router.navigate(['/memberFile'/* , file.member.id */]);
        },
        (error) => {
          this.loading = false;
          // this.cdr.detectChanges();
          this.notificationService.showError(error);
        }
    )

  }

  private onSave(file: MemberFile): Observable<MemberFile> {
    if (this.editForm.invalid){
      return this.confirmDialogService.confirm('file contains invalid form fields. Save anyway?')
       .pipe(
         filter((confirm: boolean) => confirm),
         switchMap(() => {
          this.loading = true;
          // this.cdr.detectChanges();
          return this.memberfileService.saveMemberFile(file);
        })
       )
    } else {
      this.loading = true;
      return this.memberfileService.saveMemberFile(file);
    }
  }

  public getInValid(formCtrl: string): boolean{
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

  public onBack(): void {
    this.router.navigateByUrl(this.backUrl);
  }

}
