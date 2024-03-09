import { FormUtils } from "src/app/shared/form-utils";
import { UserStatus } from "./constant";
import { UserRoleFragment } from "../user-role/user-role.model";

export class User extends FormUtils{
    id : number;
    name : string;
    email : string;
    roles : UserRoleFragment [];
    status : UserStatus;
    createdAt: Date;
    canActive: boolean;
    canInactive: boolean;
    get isAdmin () {
      return JSON.parse(localStorage["token"]).user.id == 1;
    }
    get canUpdate() {
      return this.status == UserStatus.Active || this.status == UserStatus.Inactive;
    }
    public format(data: any) {
      // console.log(JSON.parse(localStorage["token"]));
      this.roles = data.roles;
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      this.canActive = data.canActive;
      this.canInactive = data.canInactive;
      this.status = data.status;
      this.createdAt = data.createdAt;
    }
}