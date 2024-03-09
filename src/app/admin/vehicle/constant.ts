import { SharedPermissions } from "src/app/shared/constant";

export const TAG = 'vehic';
export const TAG_DESCRIPTION = 'Vehicle';
export enum VehicleStatus {
    Active = 'activ',
    OnMaintennance = 'onMai',
    ForMaintennance = 'forMa',
}
export const VehiclePermissions = {
    "label" : TAG_DESCRIPTION,
    "tag" : TAG,
    "permissions" : ["View","Modify"]
}
export enum VehicleTransmission {
    Manual = 'manua',
    Automatic = 'autom',
}
export class VehicleTransmissions {
    static format (status) {
        switch(status) {
            case VehicleTransmission.Manual:
                return "Manual";
            default:
                return "Automatic";
        }
    }
}
export class VehicleStatuses {
    static format (status) {
        switch(status) {
            case VehicleStatus.Active:
                return '<span class="badge badge-success">Active</span>';
            break;
            case VehicleStatus.ForMaintennance:
                return '<span class="badge badge-success">For Maintennance</span>';
            break;
            case VehicleStatus.OnMaintennance:
                return '<span class="badge badge-info">On Maintennance</span>';
            break;
            default:
                return "";
            
        }
    }
}