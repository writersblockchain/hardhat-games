//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Game1 {
  event Winner(address winner);

 

  function win() public {
    emit Winner(msg.sender);
  }
}
