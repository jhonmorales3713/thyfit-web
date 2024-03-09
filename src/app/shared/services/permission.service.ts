import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionService extends ApiService {
    hasPermission(permission:string) :boolean {
        return JSON.parse(localStorage["token"]).user.id == 1 || JSON.parse(localStorage["token"]).user_role.find(it=>it.access.includes(permission)) !== undefined;
    }
    isAdmin(): boolean {
        return JSON.parse(localStorage["token"]).user.id == 1;
    }
}
