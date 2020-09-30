import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedMemberFile, MemberFile } from '../../models/memberFile.model';
// import { Location } from '@angular/common';

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
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: ResolvedMemberFile): void {
      if (file) {
        this.memberfile = file.memeberfile;
        this.backUrl = file.backUrl;
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
