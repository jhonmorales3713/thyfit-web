export enum UserStatus {
    Active = 'activ',
    Inactive = 'inact',
}
export class UserStatuses {
    static format (status) {
        switch(status) {
            case UserStatus.Active:
                return '<span class="badge badge-success">Active</span>';
            default:
                return '<span class="badge badge-secondary">Inactive</span>';    
        }
    }
}