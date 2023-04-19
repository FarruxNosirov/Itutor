import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';

enum IToken {
  accessToken = 'accessToken',
}
export default class TokenStore {
  private accessToken: string = '';

  constructor() {
    makeAutoObservable(this);

    this.getTokenFromAsyncStore();
  }

  _set = async (token: string) => {
    try {
      await AsyncStorage.setItem(IToken.accessToken, token);
      this.accessToken = token;
    } catch (err) {}
  };

  _get = () => this.accessToken;

  get isVisible(): boolean {
    return !!this._get();
  }

  private getTokenFromAsyncStore = async () => {
    try {
      const token = (await AsyncStorage.getItem(IToken.accessToken)) || '';
      this.accessToken = token;
    } catch (err) {}
  };
}
