import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchName = (state, action) => {
  return {name: action.result, symbol: state.symbol};
}

const fetchSymbol = (state, action) => {
  return {name: state.name, symbol: action.result};
}

export default function (LOLYAT = initialState.LOLYAT, action) {
  switch (action.type) {
    case types.LOLYAT_NAME_SUCCESS:
      return fetchName(LOLYAT, action);
    case types.LOLYAT_SYMBOL_SUCCESS:
      return fetchSymbol(LOLYAT, action);
    default:
      return LOLYAT;
  }
}
