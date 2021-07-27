import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchOwned = (state, action) => {
  // console.log("fetchOwned:", action.result);
  if(action.callBack) action.callBack(action.result);
  return action.result;
}

export default function (LOLYATOwned = initialState.LOLYATOwned, action) {
  switch (action.type) {
    case types.LOLYAT_GET_OWNED_TOKENS_SUCCESS:
      return fetchOwned(LOLYATOwned, action);
    default:
      return LOLYATOwned;
  }
}
