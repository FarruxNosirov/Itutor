import {makeAutoObservable} from 'mobx';

type Login = {
  phone: string;
  password: string;
};
type Event = any;

type LoginNewPasswort = {
  email: string;
  password: string;
  passwordConfirm: string;
};

type SiginUp = {
  phone: string;
  name: string;
  password: string;
};
type SiginUpCode = {
  code: string;
};

export default class AuthState {
  constructor() {
    makeAutoObservable(this);
  }
  private login: Login = {
    phone: '',
    password: '',
  };
  private loginNewPassword: LoginNewPasswort = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  private siginUp: SiginUp = {
    password: '',
    phone: '',
    name: '',
  };
  private siginUpCode: SiginUpCode = {
    code: '',
  };

  setLogin = (e: Event, key: keyof typeof this.login) => {
    this.login = {...this.login, [key]: e};
  };

  setLoginNewPassword = (e: Event, key: keyof typeof this.loginNewPassword) => {
    this.loginNewPassword = {
      ...this.loginNewPassword,
      [key]: e,
    };
  };

  setSignUp = (e: Event, key: keyof typeof this.siginUp) => {
    this.siginUp = {...this.siginUp, [key]: e};
  };

  setSignUpCode = (e: Event, key: keyof typeof this.siginUpCode) => {
    this.siginUpCode = {...this.siginUpCode, [key]: e};
  };
  get state() {
    return {
      login: this.login,
      loginNewPassword: this.loginNewPassword,
      signUp: this.siginUp,
      signUpCode: this.siginUpCode,
    };
  }
}
