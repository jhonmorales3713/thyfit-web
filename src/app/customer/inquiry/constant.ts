
export class DeliveryType {
    static DeliveryType = {
        'prelo' : 'Pre-Load',
        'load' : 'Load',
    }
    public static format(delivery) {
        return DeliveryType.DeliveryType[delivery];
    }
}
export enum DeliveryTypes {
    PreLoad = 'prelo',
    Load = 'load'
}
export enum DeliveryStatus {
    Pending = 'pendi',
    Received = 'recei',
    Forload = 'forlo',
    Loaded = 'load',
    InTransit = 'intra',
    Delivered = 'deliv',
    Cancelled = 'cance',
    Failed = 'faile',
    Invalid = 'inval',
}
export class DeliveryStatuses {
    static format (status) {
        switch(status) {
            case DeliveryStatus.Pending:
                return '<span class="badge badge-secondary">Pending</span>';
            break;
            case DeliveryStatus.Received:
                return '<span class="badge badge-success">Received</span>';
            break;
            case DeliveryStatus.Forload:
                return '<span class="badge badge-info">For Load</span>';
            break;
            case DeliveryStatus.Loaded:
                return '<span class="badge badge-info">Loaded</span>';
            break;
            case DeliveryStatus.InTransit:
                return '<span class="badge badge-info">In Transit</span>';
            break;
            case DeliveryStatus.Delivered:
                return '<span class="badge badge-success">Delivered</span>';
            break;
            case DeliveryStatus.Cancelled:
                return '<span class="badge badge-danger">Cancelled</span>';
            break;
            case DeliveryStatus.Failed:
                return '<span class="badge badge-danger">Failed</span>';
            break;
            case DeliveryStatus.Invalid:
                return '<span class="badge badge-danger">Invalid</span>';
            break;
            default:
                return "";
            
        }
    }
}