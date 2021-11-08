import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  routesSideNav: any;

  constructor() { }

  ngOnInit(): void {
    this.routesSideNav = RoutesSideNav;
  }

}

export const RoutesSideNav = [
  { path: '/dashboard', title: 'Dashboard', iconActive: '../../../assets/images/icons/dashboard.svg', iconInActive: '../../../assets/images/icons/dashboardBlue.svg'},
  { path: '/message', title: 'Message', iconActive: '../../../assets/images/icons/message.svg', iconInActive: '../../../assets/images/icons/messageBlue.svg'},
  { path: '/networks', title: 'Networks', iconActive: '../../../assets/images/icons/networks.svg', iconInActive: '../../../assets/images/icons/networksBlue.svg'},
  { path: '/account', title: 'Account', iconActive: '../../../assets/images/icons/profile.svg', iconInActive: '../../../assets/images/icons/profileBlue.svg'}
]
