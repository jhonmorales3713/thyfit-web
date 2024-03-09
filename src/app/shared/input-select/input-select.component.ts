import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @Output() ngModelChange = new EventEmitter<any>();
  @Input() searchService: any;

  constructor() {}

  ngOnInit(): void {
    this.queryControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.searchService.dropdown(query))
    ).subscribe((suggestions:any) => {
      this.suggestions = [];
      suggestions.forEach(item => {
        this.suggestions.push(item);
      })
      // this.suggestions = suggestions;
    });
  }

  selectSuggestion(suggestion: SearchResponse): void {
    this.queryControl.setValue(suggestion.name);
    this.suggestions = [];
    this.queryControl.setValue(null);
    this.ngModelChange.emit(suggestion); // Emit the selected suggestion to ngModel
  }
  onInputBlur():void
  {
    // this.suggestions = [];
  }  
  onInputFocus(): void {
    console.log("SD");
    this.searchService.dropdown(this.queryControl.value).subscribe( suggestions => {
      this.suggestions = [];
      suggestions.forEach(item => {
        this.suggestions.push(item);
      })
    })
  }

}