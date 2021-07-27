import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  getName, 
  getSymbol
} from '../lib/LOLYATService';

export function* getLOLYATNameResultSaga({networkId}) {
  try {
    console.log(networkId);
    yield put({ type: types.FETCHING}); 
    const LOLYATNameResult = yield call(getName, networkId);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.LOLYAT_NAME_SUCCESS, result: LOLYATNameResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* getLOLYATSymbolResultSaga({networkId}) {
  try {
    yield put({ type: types.FETCHING}); 
    const LOLYATSymbolResult = yield call(getSymbol, networkId);
    yield put({ type: types.FETCH_COMPLETE});
    
    yield put({ type: types.LOLYAT_SYMBOL_SUCCESS, result: LOLYATSymbolResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
