
export enum VehicleStatus {
    Active = 'activ',
    OnMaintennance = 'onMai',
    ForMaintennance = 'forMa',
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