import { FormUtils } from "src/app/shared/form-utils";

export class LoginForm extends FormUtils {
    username: string = '';
    password: string = '';
    fill() {

    }
    copy() {

    }
    toPayLoad() {
        return {
            'username': this.username,
            'password': this.password,
        }
    }
}