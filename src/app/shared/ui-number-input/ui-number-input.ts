import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'number-input',
    templateUrl: './ui-number-input.component.html',
})
export class NumberInputComponent {
    @Output() numberInputChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() max: number;
    @Input() min: number;
    numberInput: string = '';
    
    onInputChange(event: any) {
      const inputValue: string = event.target.value;
      const regex: RegExp = new RegExp(`^\\d{${this.min},${this.max}}$`); // Dynamic regex based on minLength and maxLength
      
      if (!regex.test(inputValue)) {
        // Reset input value if it does not match the pattern
        this.numberInput = inputValue.replace(/\D/g, '').substr(this.min, this.max); // Remove non-digit characters and limit to 4 digits
      } else {
        this.numberInput = inputValue;
      }
    }
  }