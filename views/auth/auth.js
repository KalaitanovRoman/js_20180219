import {View} from '../view';
import {Auth} from '../../blocks/auth/auth';

export class AuthView extends View {

    constructor(el) {
        super(el);
        this.auth = new Auth(this.el, {});
    }

}