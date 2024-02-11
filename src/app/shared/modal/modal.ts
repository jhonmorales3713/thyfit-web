export interface ModalOptions {
    type: ModalType;
    content: any;
    title: string;
}
export enum ModalType {
    Warning = 'Warning',
    None = 'None',
}
export enum ModalResponse {
    Yes,
    No,
    YesNo,
    YesNoCancel
}