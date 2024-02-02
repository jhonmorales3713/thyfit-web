import { Component } from '@angular/core';

@Component({
  selector: 'main-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.css']
})
export class MainAdminPage {
  title = 'admin';
  sideNavVisible:boolean = false;
}
