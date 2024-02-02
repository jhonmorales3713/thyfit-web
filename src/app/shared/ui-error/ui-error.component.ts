import { Component, Input, OnInit } from '@angular/core';
import { Translations } from 'src/app/shared/translation';

@Component({
  selector: 'ui-error',
  templateUrl: './ui-error.component.html',
})
export class UiErrorComponent implements OnInit{
    @Input() name: any;
    @Input() form: any;
    errors:Array<String> = [];
    ngOnInit() {
      if(this.form.errors[this.name] !== undefined) {
        this.form.errors[this.name].forEach(error => {
          let errorMessage = error;
          this.errors.push(errorMessage);
        });
      }
    }
}
