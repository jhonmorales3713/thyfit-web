import { Component, OnInit } from '@angular/core';
import { AppNotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'main-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.css']
})
export class MainAdminPage implements OnInit{
  title = 'admin';
  sideNavVisible:boolean = false;

  ngOnInit () {//read the invoked data or default data
  
  }
}
