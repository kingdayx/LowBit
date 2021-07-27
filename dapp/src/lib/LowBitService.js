import { getProvider, getLowBitAddress } from './web3Service';
import LowBit from './LowBit';

const Web3 = require('web3');

let web3 = new Web3();
let LowBitAddress = '0x0';
let LowBit = null;

const setWeb3Provider = (networkId) => {
  web3.setProvider(new web3.providers.HttpProvider(getProvider(networkId)));
  LowBitAddress = getLowBitAddress(networkId);
  LowBit = new LowBit(web3, LowBitAddress);
}

export const doCreateSingleGame = (networkId, tokenId) => {
    setWeb3Provider(networkId);
    return LowBit.createSingleGame(tokenId);
}

export const doGetUserSingleGames = (networkId, addres) => {
  try {
    setWeb3Provider(networkId);
    const result = LowBit.getUserSingleGames(addres);
    return result;
  } catch (err) {
    console.log('doGetUserSingleGames: ', err);
    return 'getUserSingleGames not found';
  }
}

export const getSingleGame = (networkId, gameId, address) => {
  try {
    setWeb3Provider(networkId);
    const result = LowBit.singleGames(gameId);
    return result;
  } catch (err) {
    console.log('getSingleGame: ', err);
    return 'singleGame not found';
  }
}
