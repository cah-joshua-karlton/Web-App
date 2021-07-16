import { Component, OnInit } from '@angular/core';
import { LookerEmbedDashboard, LookerEmbedSDK } from '@looker/embed-sdk';



@Component({
  selector: 'app-dashboard-looker',
  templateUrl: './dashboard-looker.component.html',
  styleUrls: ['./dashboard-looker.component.css']
})
export class DashboardLookerComponent implements OnInit {

  constructor(
   
    ) { 
  }

  ngOnInit(): void {
    this.initializeEmbedSDK();
    this.createDashboard(10, '#dashboard-10', 'dashboard-10')//dashboard ID is 10 - Need to confirm
    
  }

  createDashboard(id: any, placeHolder: string, cssClassName: string): void {
    LookerEmbedSDK.createDashboardWithId(id)
      .appendTo(placeHolder)
      .withClassName(cssClassName)
      .withNext()
      .build()
      .connect()
      .then(this.setupDashboard)
      .catch((error: Error) => {
        console.error('An unexpected error occurred', error);
      });
  }
  setupDashboard(dashboard: LookerEmbedDashboard): void {
    /* document.querySelector('#run').addEventListener('click', () => {
       dashboard.send('dashboard:run')
     })
     */
  }
  initializeEmbedSDK(): void {
    LookerEmbedSDK.init("http://10.49.43.111:8080");
  //   Passing two strings, one server, one Auth
  }

}
