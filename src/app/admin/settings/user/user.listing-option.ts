import { UserStatus } from "./constant";


export class UserListingOption {
    page: number;
    search: string;
    limit: number = 15;
    sortBy: string;
    status: UserStatus;
}