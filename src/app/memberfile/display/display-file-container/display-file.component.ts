import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';
import { PreviousCurrentUrlService } from '@core/services/routes-url/previousCurrentUrl.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { StaffInfoService } from '@core/services/staff/staff-info.service';
import { ConfirmDialogService } from '@core/services/confirm-dialog/confirm-dialog.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {

  fullnameTitle: string;
  pageTitle: string = 'File';
  backUrl: string;
  memberId: string;
  loading: boolean;

  constructor(private router: Router,
              private previousCurrentUrlService: PreviousCurrentUrlService,
              private staffInfoService: StaffInfoService,
              private confirmDialogService: ConfirmDialogService,
              private notificationService: NotificationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile): void {
      if (file) {
        this.fullnameTitle = `${file.member.rank} ${file.member.lastName} ${file.member.firstName}`;
        this.memberId = file.member.id;
        this.backUrl = this.previousCurrentUrlService.preUrl;
        this.pageTitle = 'Staff member file of: ';
      } else {
        this.pageTitle = 'No member File found';
      }
  }

  public onBack(): void {
    if (this.backUrl === this.router.url){
      this.router.navigate(['/memberFile'])
    }else{
      this.router.navigateByUrl(this.backUrl);
    }
  }

  public removeFile(){
    this.confirmDialogService.confirm(`Remove ${this.fullnameTitle} from company's power?`, 'warning')
        .pipe(
          filter( (confirm: boolean) => confirm),
          switchMap(() => {
            this.loading = true;
            return this.staffInfoService.deleteStaff(this.memberId);
          })
        ).subscribe(
          (success) => {
            this.loading = false;
            this.notificationService.showSuccess(success.message);
            this.router.navigate(['/memberFile']);
          },
          (error) => {
            this.loading = false;
            this.notificationService.showError(error);
          }
      );

  }

}
