import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { FoodTranslation } from '../food.translation';
import { FoodForm } from '../food.form';
import { FoodService } from '../food.service';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService, NotificationService } from 'src/app/shared/services/notification.service';
@Component({
  selector: 'food-form',
  templateUrl: './food.component.html',
})
export class FoodComponent implements OnInit{
    T = Translations;
    @Input('form') form:FoodForm;
    formX = new FoodForm();
    constructor(
      public foodApiService: FoodService,
      private notification: AppNotificationService
    ) {
      this.form = new FoodForm();
    }
    ngOnInit() {
    }
    save() {
      this.form.submit.emit(150);
      this.foodApiService.create(this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.notification.success("Success","New Food Added");
          setTimeout(() => {this.form.submit.emit(200);}, 3000);
          
        }, error: (failedRequest) => {
          this.notification.error("Error","Saving Failed");
          this.form.submit.emit(204);
        }
      });
    }
}
