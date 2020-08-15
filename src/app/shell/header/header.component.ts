import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<string> = new EventEmitter();
  title:string = '744 Engineer Company';
  @Input() userInfo:  { userAvatar?:string, userFullNameTitle:string} = {
        userAvatar: '',
        userFullNameTitle:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit("toogle-sideBar");
  }

}
