import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

export class ConsigneeFragment {
    id: number;
    name: string;
    position: string;
}
