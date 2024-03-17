import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

export class Consignee {
    id: number;
    name: string;
    position: string;
    status: string;
}

export class ConsigneeListingOptions {
    name: string;
}