import { FormUtils } from "src/app/shared/form-utils";
import { UserRoleStatus } from "./constant";

export class UserRole extends FormUtils{
    id : number;
    name : string;
    access : string;
    status : UserRoleStatus;
    userCount : number;
    createdAt: Date;
    canActive: boolean;
    canInactive: boolean;
    isChecked(permission: string) {
      return this.isAdmin || this.permissions.includes(permission);
    }
    get permissions () {
      return this.access.split(',');
    }
    get isAdmin () {
      return JSON.parse(localStorage["token"]).user.id == 1;
    }
    get canUpdate() {
      return this.status == UserRoleStatus.Active || this.status == UserRoleStatus.Inactive;
    }
    public format(data: any) {
      // console.log(JSON.parse(localStorage["token"]));
      this.access = data.access;
      this.id = data.id;
      this.name = data.name;
      this.userCount = data.userCount;
      this.canActive = data.canActive;
      this.canInactive = data.canInactive;
      this.status = data.status;
      this.createdAt = data.createdAt;
    }
}
export class UserRoleFragment {
  id : number;
  name : string;
}