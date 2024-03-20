import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { SearchResponse } from '../interface/search-response';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.css']
})
export class InputSelectComponent {
  placeholder: string = 'Search...';
  queryControl = new FormControl('');
  suggestions: SearchResponse[] = [];
  hide = true;
  hasSelected = false;
  options: any []= [];
  @Output() modelChange = new EventEmitter<any>();
  @Input() searchService: any;
  @Input() hideSearch : boolean;
  @Input() model : any;
  @Input() modelType : any;
  @Input() params : any;
  @Input() field: string = 'name';
  @Input() hasError = false;
  @Input() additionalFields: any = [];

  constructor() {}

  ngOnInit(): void {
    if (!this.model) {
      this.model = new this.modelType();
    }
    this.queryControl.setValue(this.model ? this.model[this.field] : null);
    this.queryControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(query => this.searchService.dropdown(this.params))
    ).subscribe((suggestions:any) => {
      this.suggestions = [];
      this.hide = this.queryControl.value == null || this.queryControl.value == "" || this.hasSelected;
      console.log(this.hide);
      this.loadSuggestion(suggestions);
    });
  }
  loadSuggestion(suggestions) {
    // this.hide = false;
    suggestions.forEach(item => {
      let label = '';
      if (this.additionalFields.length > 0) {
        this.additionalFields.forEach(field => {
          label += '<br><small><b>'+field.label+'</b></small>:';
          let suggestionField = item;
          let firstIndex = true;
          field.field.split('.').forEach(field2 => {
            if (firstIndex) {
              suggestionField = item[field2];
            } else {
              suggestionField = suggestionField[field2];
            }
            firstIndex = false;
          });
          label+=suggestionField+"";
        });
        item["additionalFields"] = label;
      }
      this.suggestions.push(item);
    });
  }
  selectSuggestion(suggestion: SearchResponse): void {
    this.queryControl.setValue(suggestion[this.field]);
    this.hide = true;
    this.hasSelected = true;
    this.suggestions = [];
    if (this.model) {
      this.modelChange.emit(suggestion); // Emit the selected suggestion to ngModel
    } else {
      this.queryControl.setValue(null);
      this.modelChange.emit(suggestion); // Emit the selected suggestion to ngModel
    }
  }
  onInputBlur():void
  {
    if (!this.suggestions.find(it => it.name === this.queryControl.value)) {
        this.params[this.field] = null;
        // this.queryControl.setValue(null);
        this.suggestions = [];
        // this.modelChange.emit(null);
    }
    this.hide = true;
  }  
  onInputChange() {
    if (this.model) {
      this.params[this.field] = this.queryControl.value;
    } else {
      this.params = [];
      this.params['name'] = this.queryControl.value;
    }
  }
  onInputFocus(): void {
    this.hide = true;
    this.hasSelected = false;
    this.suggestions = [];
    if (this.model) {
      this.params[this.field] = this.queryControl.value;
    }
    this.searchService.dropdown(this.params).subscribe(suggestions => {
      this.hide = false;
      this.loadSuggestion(suggestions);
    })
  }

}