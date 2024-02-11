import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { FoodService } from './food.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FoodComponent } from './components/food.component';
import { ModalResponse, ModalType } from 'src/app/shared/modal/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './food.page.html'
})
export class FoodPage implements OnInit {
  T =Translations;
	isLoading = true;
  customers:any;
  data: string;
  newBtn = new EventEmitter<boolean>();
  constructor(
    private route: Router,
    private foodService: FoodService,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
  ){
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container); 
    this.loadPage();
  }
  async loadPage() {
    await this.foodService.getFoods().subscribe(data => {
      this.isLoading = false; 
      this.customers = data;
    });
  }
  async navigate(data) {
    await this.foodService.getFoods({page: data}).subscribe(data => {
      this.isLoading = false; 
      this.customers = data;
    });
  }
  newFood() {
    this.route.navigate(["admin/foods/new"]);
  }
}
