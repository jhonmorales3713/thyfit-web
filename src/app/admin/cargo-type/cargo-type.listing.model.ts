import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

export class CargoType {
    id: number;
    name: string;
    status: string;
    constructor() {
    }
    format(payload: any) {
      payload["data"].forEach(data => {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
      });
      return this;
    }
}
