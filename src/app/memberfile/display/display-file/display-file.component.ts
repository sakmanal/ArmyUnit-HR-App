import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberFile } from '../../models/memberFile.model';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {

  memberfile: MemberFile;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const dataName = 'memberfile';
    this.memberfile = this.route.snapshot.data[dataName];
    console.log(this.memberfile);
  }

  public onBack(): void {
    this.router.navigate(['/membeFile']);
  }

}
