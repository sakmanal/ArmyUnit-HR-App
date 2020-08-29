import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public set search(value:string) {
      this.searchValue.emit(value)
  }

}
