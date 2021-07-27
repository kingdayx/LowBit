import { fork, all } from 'redux-saga/effects';
import { 
  watchHealth,
  watchSimpleTokenName,
  watchSimpleTokenSymbol,
  watchSimpleTokenDecimals,
  watchLOLYATName,
  watchLOLYATSymbol,
  watchLOLYATGetOwnedTokens,
  watchLOLYATOwnedTokenURI
} from './watcher';

export default function* startForman() {
  yield all([
    fork(watchHealth),
    fork(watchSimpleTokenName),
    fork(watchSimpleTokenSymbol),
    fork(watchSimpleTokenDecimals),
    fork(watchLOLYATName),
    fork(watchLOLYATSymbol),
    fork(watchLOLYATGetOwnedTokens),
    fork(watchLOLYATOwnedTokenURI)
  ]);
};
