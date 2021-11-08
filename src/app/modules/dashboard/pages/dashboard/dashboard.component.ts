import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {RoutesSideNav} from "../../../../layout/sidenav/sidenav.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private listTitles: any;

  newMessages = [
    {
      order: 22355,
      from: 'ABC Pte Ltd',
      status: 'open',
      date: '23/7/2021, 1:30pm',
      type: 'incoming'
    },
    {
      order: 225454548445,
      from: 'ABC Pte Ltd',
      status: 'open',
      date: '23/7/2021, 1:30pm',
      type: 'incoming'
    },
    {
      order: 225455,
      from: 'ABC Pte Ltd',
      status: 'open',
      date: '23/7/2021, 1:30pm',
      type: 'incoming'
    },
    {
      order: 22323455,
      from: 'ABC Pte Ltd',
      status: 'open',
      date: '23/7/2021, 1:30pm',
      type: 'incoming'
    },
    {
      order: 2256785455,
      from: 'ABC Pte Ltd',
      status: 'open',
      date: '23/7/2021, 1:30pm',
      type: 'incoming'
    }
  ]

  topClients = [
    {
      client: 'ABC Pte Ltd',
      progressValue: 24
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 22
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 20
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 17
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 16
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 16
    },
    {
      client: 'ABC Pte Ltd',
      progressValue: 14
    }
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.listTitles = RoutesSideNav;
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }
    for (let item = 0; item < this.listTitles.length; item++) {
      if(this.listTitles[item].path === titlee){
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }


}
