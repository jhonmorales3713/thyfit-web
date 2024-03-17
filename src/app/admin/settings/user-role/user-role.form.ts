import { DeliveryStatus, DeliveryType } from "src/app/admin/warehouse/inquiry/constant";
import { FormUtils } from "src/app/shared/form-utils";
import { DatePipe, formatDate } from "@angular/common";
import { FormInterface } from "src/app/shared/form.interface";
import { UserRoleStatus } from "./constant";

export class UserRoleForm extends FormUtils implements FormInterface{
    id : number;
    name: string;
    status: UserRoleStatus;
    canActive: boolean;
    access: string = '';
    get canUpdate() {
      return this.canActive;
    }
    get permissions () {
      return this.access.split(',');
    }
    isChecked(permission: string) {
      return this.permissions.includes(permission);
    }
    updatePermissions(event:any, permission: string) {
      let roles = this.access.split(',');
      if (!roles.includes(permission) && event.target.checked) {
        roles.push(permission);
        this.access = roles.join(',');
      } else {
        this.access = roles.filter(role => permission != role).join(',');
      }
    }
    fill(data: any) {
      this.access = data.access;
      this.id = data.id;
      this.name = data.name;
      this.status = data.status;
    }
    toPayLoad() {
        return {
          'name' : this.name,
          'access' : this.access
        }
    }
}