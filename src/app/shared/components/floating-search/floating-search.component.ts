import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-search',
  templateUrl: './floating-search.component.html',
  styleUrls: ['./floating-search.component.css']
})
export class FloatingSearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public set search(value: string) {
      this.searchValue.emit(value)
  }


}
