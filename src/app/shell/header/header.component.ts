import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<string> = new EventEmitter();
  title:string = '744 Engineer Company';
  userInfo: { userAvatar?:string, userFullNameTitle:string} =  {
    userAvatar: '../../../assets/Flag_of_Greece.jpg',
    userFullNameTitle:'Master Sergeant(ENG) Nikalaos Papas'
  }
  @Input() smallerScreen:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit("toogle-sideBar");
  }

}
