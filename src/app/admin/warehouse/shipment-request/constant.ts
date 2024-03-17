export const TAG = 'shReq';
export const TAG_DESCRIPTION = 'Shipment Request';
export const ShipmentRequestPermissions = {
    "label" : TAG_DESCRIPTION,
    "tag" : TAG,
    "permissions" : ["View","Modify", "Approve", "Decline"] 
}
export enum ShipmentRequestStatus {
    Pending = 'pendi',
    Modify = 'updat',
    Approved = 'appro',
    Declined = 'decli',
}
export class ShipmentRequestStatuses {
    static format (status) {
        switch(status) {
            case ShipmentRequestStatus.Pending:
                return '<span class="badge badge-secondary">Pending</span>';
            break;
            case ShipmentRequestStatus.Approved:
                return '<span class="badge badge-success">Received</span>';
            break;
            case ShipmentRequestStatus.Declined:
                return '<span class="badge badge-danger">Declined</span>';
            break;
            default:
                return "";
            
        }
    }
}