import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  doGetOwnedTokens
} from '../lib/LOLYATService';

export function* getLOLYATGetOwnedTokensResultSaga({networkId, address, callBack}) {
  try {
    yield put({ type: types.FETCHING}); 
    const LOLYATGetOwnedTokensResult = yield call(doGetOwnedTokens, networkId, address);
    // TODO forEach run all the cards
    yield put({ type: types.FETCH_COMPLETE});
    yield put({ type: types.LOLYAT_GET_OWNED_TOKENS_SUCCESS, result: LOLYATGetOwnedTokensResult.toString(),  callBack});
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
