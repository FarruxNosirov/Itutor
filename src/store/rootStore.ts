import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import AuthStore from './auth/AuthStore';

export class RootStore {
  auth: AuthStore;
  constructor() {
    makeAutoObservable(this);
    this.auth = new AuthStore(this);
  }
}
const rootStore = new RootStore();

export default createContext(rootStore);
