import { EventEmitter, Injectable, Input } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FormUtils {
    errors = [];
    hasError = false;
    submit = new EventEmitter<number>();
    static setErrors(errors: any, form: any) {
        form.errors = errors;
        form.hasError = true;
    }
    hasControlError(name: string) {
        return this.errors[name] !== undefined;
    }
}