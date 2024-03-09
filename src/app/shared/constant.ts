import { InquiryPermissions, TAG as InquiryTag } from "../customer/inquiry/constant"

export const SharedPermissions = {
    View : 'view',
    Modify : 'updat',
    Delete : 'delet',
    Receive : 'recei',
    Invalid : 'inval',
}
export const SharedPermissionList = {
    Inquiry : {
        View : InquiryTag+SharedPermissions.View,
        Receive : InquiryTag+SharedPermissions.Receive,
        Invalid : InquiryTag+SharedPermissions.Invalid,
    }
}