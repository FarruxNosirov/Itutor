import {makeAutoObservable, toJS} from 'mobx';
import api from '../../api/api';
import {Operation} from '../../utils/Operation';
import {
  LoginPayload,
  LoginResponse,
  SiginUpPayload,
  SiginUpResponse,
} from './../../api/requests/api.acount.tayps';
import {AuthResponseMessage} from './../../types/Auth.types';
import {AppRootStore} from './RootStore';
export const CONFIG_KEY = 'config';
export const CONFIG_VALUES = {
  isEmailConfirm: 'isEmailConfirm',
};
export default class AuthStore {
  clear() {
    throw new Error('Method not implemented.');
  }
  loginOperation = new Operation<LoginResponse>({} as LoginResponse);
  signUpOperation = new Operation<SiginUpResponse>({} as SiginUpResponse);
  logoutOperation = new Operation(undefined);
  app: AppRootStore;
  shouldClearData = false;
  loading: boolean = false;
  constructor(app: AppRootStore) {
    makeAutoObservable(this);
    this.app = app;
  }
  siginUp = (payload: SiginUpPayload) => {
    this.signUpOperation.run(() => api.signUp(payload));
    console.log('this.signUpOperation', this.signUpOperation.data.message);
    if (this.signUpOperation.isSuccess) {
      const {data} = this.signUpOperation;
      if (data.message === AuthResponseMessage.SignUpSuccess) {
        this.app.token._set(data.data);
      }
    }
  };

  login = async (payload: LoginPayload) => {
    console.log(toJS(JSON.stringify(payload, null, 2)));
    await this.loginOperation.run(() => api.login(payload));
    const {
      data: {data, message},
    } = this.loginOperation;
    console.log('data', toJS(data));

    // this.app.allUser.setSideBarTitle('Pochtalar');

    console.log(toJS(JSON.stringify(this.loginOperation.error, null, 2)));

    // runInAction(() => (this.loading = false));
    return this.loginOperation.isSuccess;
  };
}
