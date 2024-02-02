import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard.page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements OnInit {
  toggleSidenav = true;
  constructor(public dashboardService: DashboardService) {

  }
  toggleNav() {
    this.toggleSidenav = !this.toggleSidenav;
  }
  ngOnInit(): void {
    let dashboard = this.dashboardService.getCustomers().subscribe(data => {
      console.log(data);
    });
  }
}
