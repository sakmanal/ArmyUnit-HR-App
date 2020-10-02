import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Penalties } from '../../models/Penalties.model';
import { MemberFile } from '../../models/MemberFile.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-penalties',
  templateUrl: './display-penalties.component.html',
  styleUrls: ['./display-penalties.component.css']
})
export class DisplayPenaltiesComponent implements OnInit {

  dataSource = new MatTableDataSource<Penalties>();
  displayedColumns = ['no', 'type', 'total_days', 'imposition_date', 'reason', 'imposition_officer'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile){
    if (file){
       this.dataSource = new MatTableDataSource(file.penalties);
    }
  }

}
