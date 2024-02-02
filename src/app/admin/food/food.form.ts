import { FormUtils } from "src/app/shared/form-utils";

export class FoodForm extends FormUtils {
    name: string;
    protein: Number;
    servingSize: Number;
    fat: Number;
    carbohydrate: Number;
    calorie: Number;
    createdBy: Number;
    fill() {

    }
    copy() {

    }
    toPayLoad() {
        return {
            'name': this.name,
            'servingSize': this.servingSize,
            'protein': this.protein,
            'createdBy': 1,
            'fat': this.fat,
            'carbohydrate': this.carbohydrate,
            'calorie': this.calorie,
        }
    }
}