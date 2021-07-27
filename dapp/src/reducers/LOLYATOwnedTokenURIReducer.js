import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchOwnedTokenURI = (state, action) => {
  let tokenURI = JSON.parse(action.result);
  let data = {
    name: tokenURI.name, 
    image: 'https://ipfs.infura.io/ipfs/' + tokenURI.image,
    HP: tokenURI.HP,
    ATK: tokenURI.ATK,
    DEF: tokenURI.DEF
  };
  if(action.callBack) action.callBack(data);
  return data;
}

export default function (LOLYATOwnedTokenURI = initialState.LOLYATOwnedTokenURI, action) {
  switch (action.type) {
    case types.LOLYAT_TOKEN_URI_SUCCESS:
      return fetchOwnedTokenURI(LOLYATOwnedTokenURI, action);
    default:
      return LOLYATOwnedTokenURI;
  }
}
