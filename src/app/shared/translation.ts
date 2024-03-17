import { InquiryTranslation } from "../admin/warehouse/inquiry/inquiry.translation";
import { UserRoleTranslation } from "../admin/settings/user-role/user-role.translation";
import { UserTranslation } from "../admin/settings/user/user.translation";
import { SidenavTranslation } from "../admin/sidenav/sidenav.translation";
import { SharedTranslations } from "./shared";
import { ShipmentRequestTranslation } from "../admin/warehouse/shipment-request/shipment-request.translation";

export const Translations = { 
    Inquiry : InquiryTranslation,
    Sidenav: SidenavTranslation,
    UserRole: UserRoleTranslation,
    User: UserTranslation,
    Shared: SharedTranslations,
    ShipmentRequest: ShipmentRequestTranslation
}
