import { Component, OnInit } from '@angular/core';
import { StaffInfoService } from '../../core/services/staff/staff-info.service';
import { Staffbasic } from '../../core/models/staff.model';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.css']
})
export class SelectFileComponent implements OnInit {

  private staffnames: Staffbasic[];
  filteredStaffnames: Staffbasic[];
  loading:boolean = false;
  private filterBy:string = '';
  avatarFoto = '../../../assets/images/Useravatar.jpg';

  constructor(private staffInfoService: StaffInfoService,
              private notificationService: NotificationService) { }

  get listFilter(): string {
    return this.filterBy;
  }

  set listFilter(value: string) {
    this.filterBy = value;
    this.filteredStaffnames = this.performFilter(this.listFilter);
  }

  ngOnInit(): void {
    this.loading = true;
    this.staffInfoService.getAllStaffnames().subscribe(
      (staffnames) => {
        this.staffnames = staffnames;
        this.filteredStaffnames = this.performFilter(this.listFilter)
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.notificationService.showError(error);
      }
    )
  }

  public getfilter(value:string){
    this.listFilter = value;
  }

  private performFilter(filterBy: string): Staffbasic[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.staffnames.filter((staffname: Staffbasic) =>
             staffname.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
             staffname.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
             staffname.rank.toLocaleLowerCase().indexOf(filterBy) !== -1)
    } else {
      return this.staffnames;
    }

    /* 2nd way (searchs all objects keys but it's slower) */
    // return this.staffnames.filter(o =>
    //   Object.keys(o).some(k => {
    //     if (typeof o[k] === 'string')
    //       return o[k].toLowerCase().includes(filterBy.toLowerCase());
    //   })
    // );
  }

}
