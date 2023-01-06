//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;


//this is the implementation contract

contract Box{
    uint256 internal value;
    event ValueChanged(uint256 newValu);

    function store(uint256 newValue)public{
        value=newValue;
        emit ValueChanged(newValue);
    }

    function retrieve()public view{
        value;
    }

    function version()public pure returns(uint256){
        return 1;
    }
}