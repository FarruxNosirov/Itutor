import {makeAutoObservable} from 'mobx';
import AuthStore from './AuthStore';
import {createContext} from 'react';
import TokenStore from './TokenStore';

export class AppRootStore {
  auth: AuthStore;
  token: TokenStore;
  allUser: any;
  constructor() {
    makeAutoObservable(this);
    this.auth = new AuthStore(this);
    this.token = new TokenStore();
  }
}
const rootStore = new AppRootStore();
export default createContext(rootStore);
