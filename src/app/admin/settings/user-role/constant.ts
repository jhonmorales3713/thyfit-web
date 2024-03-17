import { TAG as INQUIRYTAG, InquiryPermissions } from "src/app/admin/warehouse/inquiry/constant";
import { TAG_DESCRIPTION, TAG_DESCRIPTION as VEHICLEDESCIPTION, TAG as VEHICLETAG, VehiclePermissions } from "../../vehicle/constant";
import { ShipmentRequestPermissions } from "../../warehouse/shipment-request/constant";

export enum UserRoleStatus {
    Active = 'activ',
    Inactive = 'inact',
}
export class UserRoleStatuses {
    static format (status) {
        switch(status) {
            case UserRoleStatus.Active:
                return '<span class="badge badge-success">Active</span>';
            default:
                return '<span class="badge badge-secondary">Inactive</span>';    
        }
    }
}
export const Permissions = [
    InquiryPermissions,
    VehiclePermissions,
    ShipmentRequestPermissions,
];
export const PermissionTags = {
    InquiryTag : INQUIRYTAG
}