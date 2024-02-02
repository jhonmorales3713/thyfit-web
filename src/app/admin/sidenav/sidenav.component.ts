import { Component, Input } from '@angular/core';
import { Translations } from 'src/app/shared/translation';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class AdminSidenavComponent {
  T = Translations;
  @Input('sideNavVisible') sideNavVisible:boolean = false;
  subMenu(item:any) {
    item.target.parentElement.classList.remove("initial");
    item.target.classList.remove("initial");
  }
}
