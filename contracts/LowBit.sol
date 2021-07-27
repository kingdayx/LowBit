pragma solidity ^0.6.12;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import './LOLYAT.sol';

contract LowBit is Ownable {
  
  uint constant gameFee = 0.005 ether;
  uint constant minPrice = 0.01 ether;
  uint constant minHerosToken = 5 ether;

  //address public LowBit = 0x0;
  uint256 public maxSingleGameId = 0;

  uint nonce = 0;
  LOLYAT LOLYAT;

  struct SingleGame {
    address player;
    uint256 userResult;
    uint256 contractResult;
    uint256 playerBet;
    uint8 game; // 0: smaller. 1: greater
    uint8 result; // 0 user win, 1 contract win, 2 draw
  }

  SingleGame[] public singleGames;

  mapping(address => uint256[]) public usersSingleGames;

  constructor(LOLYAT _LOLYAT) public { 
    LOLYAT = _LOLYAT;
  }

  function () payable public {

  }

  function createSingleGame(uint _tokenId) payable public returns (uint256) {
    require(msg.value >= minPrice);
    require(address(this).balance >= minHerosToken);
    require(LOLYAT.ownerOf(_tokenId) == msg.sender);

    uint userTokenNumber;
    uint contractTokenNumber;
    (userTokenNumber, , ,) = LOLYAT.getTokenProperty(_tokenId);
    (contractTokenNumber, , ,) = LOLYAT.getTokenProperty(rand(0, LOLYAT.getHerosLength()));

    int result;
    uint8 game = uint8(rand(0, 2));
    if (game > 0) {
      result = int(userTokenNumber - contractTokenNumber);
    } else {
      result = int(contractTokenNumber - userTokenNumber);
    }

    SingleGame memory _singleGame;
    if (result == 0) {
      _singleGame = SingleGame({player: msg.sender, userResult: userTokenNumber, contractResult: contractTokenNumber, playerBet: msg.value, game: game, result: 2});
      require(msg.sender.send(msg.value * 1 - gameFee));

    } else if (result > 0) {
      _singleGame = SingleGame({player: msg.sender, userResult: userTokenNumber, contractResult: contractTokenNumber, playerBet: msg.value, game: game, result: 0});
      require(msg.sender.send(msg.value * 150 / 100));

    } else {
      _singleGame = SingleGame({player: msg.sender, userResult: userTokenNumber, contractResult: contractTokenNumber, playerBet: msg.value, game: game, result: 1});
    }

    maxSingleGameId = singleGames.push(_singleGame) - 1;

    uint256[] userSingleGames = usersSingleGames[msg.sender];
    userSingleGames.push(maxSingleGameId);

    return maxSingleGameId;
  }

  // function readUserGamesCount(address _address, uint _idx) public returns (uint){
  //   return usersSingleGames[_address][_idx].length;
  // }

  function getUserSingleGames(address _address) external view returns (uint256[]) {
    return usersSingleGames[_address];
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(sha3(nonce))%(min+max)-min;
  }

  function withdraw(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance);
    owner.transfer(amount);
    return true;
  }

}
