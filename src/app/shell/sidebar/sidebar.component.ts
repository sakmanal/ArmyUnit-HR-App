import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userInfo: { userAvatar?:string, userFullNameTitle:string} =  {
    userAvatar: '../../../assets/Flag_of_Greece.jpg',
    userFullNameTitle:'Master Sergeant(ENG) Nikalaos Papas'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
