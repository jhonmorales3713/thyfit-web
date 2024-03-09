import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { HttpStatusCode } from '@angular/common/http';
import { SharedPermissions } from 'src/app/shared/constant';
import { UserService } from '../user.service';
import { UserForm } from '../user.form';
import { UserRole, UserRoleFragment } from '../../user-role/user-role.model';
import { UserRoleService } from '../../user-role/user-role.service';
@Component({
    selector: 'user-form',
    templateUrl: './form.component.html',
})
export class UserFormComponent implements OnInit{
  T = Translations;
  id: number;
  isLoading = false;
  @Input() form: UserForm;
  @Input() isUpdate = true;
  Permissions = Permissions;
  @Output() submitForm = new EventEmitter<{httpStatusCode: HttpStatusCode, data: any}>();
  constructor(
    public userService: UserService,
    public userRoleService: UserRoleService) {
  }
  ngOnInit() {
  }
  submit() {
    // submitForm
    if(this.isUpdate) {
      this.userService.update(this.form.id, this.form.toPayLoad()).subscribe({
      next: (result) => {
        this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
      }, error: (failedRequest) => {
        FormUtils.setErrors(failedRequest.error.errors, this.form);
        this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
      }});
    } else {
      this.userService.create(this.form.toPayLoad()).subscribe({
      next: (result) => {
        this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
      }, error: (failedRequest) => {
        FormUtils.setErrors(failedRequest.error.errors, this.form);
        this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
      }});
    }
  }
  selectedRole(option: any): void {
    if (!this.form.roles.find(it=>it.id == option.id)) {
      this.form.roles.push(option);
    }
  }
  removePermission(permission: UserRoleFragment) {
    this.form.roles = this.form.roles.filter(it => it.id !== permission.id);
    console.log(this.form.roles);
  }
}
