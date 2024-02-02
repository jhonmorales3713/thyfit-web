import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { FoodTranslation } from '../food.translation';
import { FoodForm } from '../food.form';
import { FoodService } from '../food.service';
import { FormUtils } from 'src/app/shared/form-utils';
@Component({
  selector: 'food-form',
  templateUrl: './food.component.html',
})
export class FoodComponent implements OnInit{
    T = Translations;
    @Input('form') form:FoodForm;
    formX = new FoodForm();
    constructor(public foodApiService: FoodService) {

    }
    ngOnInit() {
    }
    save() {
      this.foodApiService.create(this.form.toPayLoad()).subscribe(data => {
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Food',
        //   detail: 'API Key or URL is invalid.',
        // });
      }, failedRequest => {
        FormUtils.setErrors(failedRequest.error.errors,this.form)
        if (failedRequest.status === 422) {
          //   this.messageService.add({
          //     severity: 'error',
          //     detail: 'Please fill up all required fields',
          // });
        }
      });
    }
}
