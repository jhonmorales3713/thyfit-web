import { UserRoleStatus } from "./constant";


export class UserRoleListingOption {
    page: number;
    search: string;
    limit: number = 15;
    sortBy: string;
    status: UserRoleStatus;
}