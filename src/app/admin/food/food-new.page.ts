import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { FoodTranslation } from './food.translation';
import { FoodComponent } from './components/food.component';
import { FoodForm } from './food.form';
@Component({
  templateUrl: './food-new.page.html',
})
export class FoodNewPage implements OnInit{
    T = Translations;
    form = new FoodForm();
    ngOnInit() {
    }
}
