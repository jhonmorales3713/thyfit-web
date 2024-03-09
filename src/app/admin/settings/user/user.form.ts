import { DeliveryStatus, DeliveryType } from "src/app/customer/inquiry/constant";
import { FormUtils } from "src/app/shared/form-utils";
import { DatePipe, formatDate } from "@angular/common";
import { FormInterface } from "src/app/shared/form.interface";
import { UserStatus } from "./constant";
import { UserRoleFragment } from "../user-role/user-role.model";

export class UserForm extends FormUtils implements FormInterface{
    id : number;
    name: string;
    password: string;
    email: string;
    roles : UserRoleFragment [];
    status: UserStatus;
    canActive: boolean;
    get canUpdate() {
      return this.canActive;
    }
    fill(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      this.status = data.status;
      this.password = data.password;
      this.roles = data.roles;
    }
    toPayLoad() {
        return {
          'name' : this.name,
          'email' : this.email,
          'password' : this.password,
          'userRoles' : this.roles.map(item=>item.id)
        }
    }
}