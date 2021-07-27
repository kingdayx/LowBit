import { combineReducers } from 'redux';
import count from './counterReducer';
import system from './systemReducer';
import isFetching from './fetchingReducer';
import health from './healthReducer';
import simpleToken from './simpleTokenReducer';
import warning from './warningReducer';
import metaMask from './metaMaskReducer';
import LOLYAT from './LOLYATReducer';
import LOLYATOwned from './LOLYATOwnedReducer';
import LOLYATOwnedTokenURI from './LOLYATOwnedTokenURIReducer';

const appReducer = combineReducers({
  count,
  system,
  isFetching,
  health,
  simpleToken,
  warning,
  metaMask,
  LOLYAT,
  LOLYATOwned,
  LOLYATOwnedTokenURI
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
