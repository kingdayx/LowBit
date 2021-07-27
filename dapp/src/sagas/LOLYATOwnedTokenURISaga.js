import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  getTokenURI
} from '../lib/LOLYATService';

export function* getLOLYATOwnedTokenURIResultSaga({networkId, tokenId, callBack}) {
  try {
    yield put({ type: types.FETCHING}); 
    const LOLYATOwnedTokenURIResult = yield call(getTokenURI, networkId, tokenId);
    yield put({ type: types.FETCH_COMPLETE});
    yield put({ type: types.LOLYAT_URI_SUCCESS, result: LOLYATOwnedTokenURIResult, callBack });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
