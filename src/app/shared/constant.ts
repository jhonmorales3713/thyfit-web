import { InquiryPermissions, TAG as InquiryTag } from "../admin/warehouse/inquiry/constant"
import { TAG as ShipmentRequestTag} from "../admin/warehouse/shipment-request/constant"

export const SharedPermissions = {
    View : 'view',
    Modify : 'updat',
    Delete : 'delet',
    Receive : 'recei',
    Invalid : 'inval',
    Approve : 'appro',
    Decline : 'decli',
}
export const SharedPermissionList = {
    Inquiry : {
        View : InquiryTag+SharedPermissions.View,
        Receive : InquiryTag+SharedPermissions.Receive,
        Invalid : InquiryTag+SharedPermissions.Invalid,
    },
    ShipmentRequest : {
        View : ShipmentRequestTag+SharedPermissions.View,
        Approve : ShipmentRequestTag+SharedPermissions.Approve,
        Decline : ShipmentRequestTag+SharedPermissions.Decline,
    }
}