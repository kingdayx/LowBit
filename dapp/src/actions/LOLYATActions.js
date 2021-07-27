import * as types from "../constants/actionTypes";

export const LOLYATNameAction = (networkId) => ({
  type: types.CRYPTOHEROS_TOKEN_NAME,
  networkId,
});

export const LOLYATSymbolAction = (networkId) => ({
  type: types.CRYPTOHEROS_TOKEN_SYMBOL,
  networkId,
});

export const LOLYATTokenURIAction = (networkId, tokenId, callBack) => ({
  type: types.CRYPTOHEROS_TOKEN_TOKEN_URI,
  networkId,
  tokenId,
  callBack,
});

export const LOLYATOwnerOfAction = (networkId, tokenId) => ({
  type: types.CRYPTOHEROS_TOKEN_OWNER_OF,
  networkId,
  tokenId,
});

export const LOLYATTransferOwnershipAction = (networkId, address) => ({
  type: types.CRYPTOHEROS_TOKEN_TRANSFER_OWNERSHIP,
  networkId,
  address,
});

export const LOLYATGetOwnedTokensAction = (networkId, address, callBack) => ({
  type: types.CRYPTOHEROS_TOKEN_GET_OWNED_TOKENS,
  networkId,
  address,
  callBack,
});
