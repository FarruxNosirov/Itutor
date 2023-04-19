import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import AuthState from './AuthState';

class RootState {
  auth = new AuthState();
  constructor() {
    makeAutoObservable(this);
  }
}

const rootState = new RootState();
export default createContext(rootState);
