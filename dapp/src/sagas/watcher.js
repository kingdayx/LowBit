import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResultSaga } from './healthSaga';
import {
  getSimpleTokenNameResultSaga,
  getSimpleTokenSymbolResultSaga,
  getSimpleTokenDecimalsResultSaga,
} from './simpleTokenSaga';
import {
  getLOLYATNameResultSaga,
  getLOLYATSymbolResultSaga
} from './LOLYATSaga';
import {
  getLOLYATGetOwnedTokensResultSaga
} from './LOLYATOwnedSaga';
import { 
  getLOLYATOwnedTokenURIResultSaga 
} from './LOLYATOwnedTokenURISaga';

export function* watchHealth() {
  yield takeLatest(types.HEALTH, getHealthResultSaga);
}

export function* watchSimpleTokenName() {
  yield takeLatest(types.SIMPLE_TOKEN_NAME, getSimpleTokenNameResultSaga);
}

export function* watchSimpleTokenSymbol() {
  yield takeLatest(types.SIMPLE_TOKEN_SYMBOL, getSimpleTokenSymbolResultSaga);
}

export function* watchSimpleTokenDecimals() {
  yield takeLatest(types.SIMPLE_TOKEN_DECIMALS, getSimpleTokenDecimalsResultSaga);
}

export function* watchLOLYATName() {
  yield takeLatest(types.LOLYAT_TOKEN_NAME, getLOLYATNameResultSaga);
}

export function* watchLOLYATSymbol() {
  yield takeLatest(types.LOLYAT_TOKEN_SYMBOL, getLOLYATSymbolResultSaga);
}

export function* watchLOLYATGetOwnedTokens() {
  yield takeLatest(types.LOLYAT_TOKEN_GET_OWNED_TOKENS, getLOLYATGetOwnedTokensResultSaga);
}

export function* watchLOLYATOwnedTokenURI() {
  yield takeLatest(types.LOLYAT_TOKEN_TOKEN_URI, getLOLYATOwnedTokenURIResultSaga);
}
