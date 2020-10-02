import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';
// import { Location } from '@angular/common';
import { PreviousCurrentUrlService } from '@core/services/routes-url/previousCurrentUrl.service';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {

  memberfile: MemberFile;
  pageTitle: string = 'File';
  backUrl: string;

  constructor(private router: Router,
              // private location: Location,
              private previousCurrentUrlService: PreviousCurrentUrlService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile): void {
      if (file) {
        this.memberfile = file;
        this.backUrl = this.previousCurrentUrlService.previousUrl;
        this.pageTitle = 'Staff member file of: ';
      } else {
        this.pageTitle = 'No member File found';
      }
  }

  public onBack(): void {
    // this.location.back();
    this.router.navigateByUrl(this.backUrl);
  }

}
