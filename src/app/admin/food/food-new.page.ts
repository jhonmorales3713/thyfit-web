import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { FoodTranslation } from './food.translation';
import { FoodComponent } from './components/food.component';
import { FoodForm } from './food.form';
import { Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
@Component({
  templateUrl: './food-new.page.html',
})
export class FoodNewPage implements OnInit{
    T = Translations;
    isLoading = false;
    form = new FoodForm();
    constructor(
      private route: Router,
      private container: ViewContainerRef,
      private notification: AppNotificationService,) {
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container); 
      this.form.submit.subscribe(
        {
          next:(result)=> {
            if (result === 150) {
              this.isLoading = true;
            }
            if(result === 200) {
              this.isLoading = false;
              this.route.navigate(["/admin/foods"]);
            } 
            if(result === 204) {
              this.isLoading = false;
            }
          }
        }
      )
    }
    submit() {

    }
}
