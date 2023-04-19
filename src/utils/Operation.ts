import {makeAutoObservable} from 'mobx';
import {ApiError} from '../api/api.error';
import {Loading} from './Loading';

enum OperationState {
  IDLE,
  SUCCESS,
  IN_PROGRESS,
  ERROR,
}

export type IOperationState = {
  isIdle: boolean;
  isInProgress: boolean;
  isError: boolean;
  isSuccess: boolean;
};
export type IOperation<T> = IOperationState & {
  readonly error?: ApiError;
  readonly data: T;
  readonly hasInitialLoading: boolean;
  run(request: any): any;
  setInProgress(): void;
  setSuccess(): void;
  clear(): void;
};

export class Operation<T> implements IOperation<T> {
  private readonly _defaultData: T = undefined as unknown as T;
  private _data?: T = undefined;
  public hasInitialLoading: boolean = false;
  public error?: ApiError = undefined;
  private _state: OperationState = OperationState.IDLE;

  public isLoading = false;
  constructor(defaultData: T) {
    this._defaultData = defaultData;
    makeAutoObservable(this);
  }
  private setHasInitialLoading = (hasInitialLoading: boolean) => {
    this.hasInitialLoading = hasInitialLoading;
  };
  private _setError = (error: ApiError) => {
    this.error = error;
    this._state = OperationState.ERROR;
  };
  run = async (request: any) => {
    Loading.show();
    this.clearState();
    this.setInProgress();
    try {
      const response = await request();
      // console.log('response', response);
      this.setSuccess();
      this.setData(response.data);
      return response;
    } catch (e: any) {
      console.log('e', e);
      this._setError(e.response.data);
    } finally {
      this.setHasInitialLoading(true);
      Loading.hide();
    }
  };
  setData = (data: T) => {
    this._data = data;
  };

  setInProgress = () => {
    this._state = OperationState.IN_PROGRESS;
  };

  setSuccess = () => {
    this._state = OperationState.SUCCESS;
  };

  clear = () => {
    this._data = undefined;
    this.hasInitialLoading = false;
    this.clearState();
  };

  clearState = () => {
    this.error = undefined;
    this._state = OperationState.IDLE;
  };

  public get data() {
    return this._data || this._defaultData;
  }

  public get isIdle() {
    return this._state === OperationState.IDLE;
  }

  public get isSuccess() {
    return this._state === OperationState.SUCCESS;
  }

  public get isInProgress() {
    return this._state === OperationState.IN_PROGRESS;
  }

  public get isError() {
    return this._state === OperationState.ERROR;
  }
}
