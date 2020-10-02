import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '../../models/Training.model';
import { MemberFile } from '../../models/MemberFile.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-training',
  templateUrl: './display-training.component.html',
  styleUrls: ['./display-training.component.css']
})
export class DisplayTrainingComponent implements OnInit {

  dataSource = new MatTableDataSource<Training>();
  displayedColumns = ['no', 'type', 'start_date', 'complete_date', 'training_unit', 'result'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData  = this.route.snapshot.data['memberfile'];
    this.onFileRetrieved(resolvedData);
  }

  private onFileRetrieved(file: MemberFile){
    if (file){
       this.dataSource = new MatTableDataSource(file.training);
    }
  }

}
