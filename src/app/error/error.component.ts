import { HttpStatusCode } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-component',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit{
  @Input() errorCode: any;
  @Input() message: string;
  ngOnInit() {
    console.log(this.errorCode);
  }
}
