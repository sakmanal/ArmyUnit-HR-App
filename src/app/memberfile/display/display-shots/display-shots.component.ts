import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shots } from '../../models/Shots.model';
import { MemberFile } from '../../models/MemberFile.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-shots',
  templateUrl: './display-shots.component.html',
  styleUrls: ['./display-shots.component.css']
})
export class DisplayShotsComponent implements OnInit {


  dataSource = new MatTableDataSource<Shots>();
  displayedColumns = ['no', 'place', 'gun_type', 'distance', 'total_shots', 'success_rate'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile){
    if (file){
       this.dataSource = new MatTableDataSource(file.shots);
    }
  }

}
