pragma solidity ^0.6.6;

contract MyNumberContract {
    uint public myNumber = 28;
    
    function setMyNumber(uint _myNumber) public {
        myNumber = _myNumber;
    }
}