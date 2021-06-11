pragma solidity ^0.4.17;

contract Name {
    string public name;

    function Name(string intialName) public {
        name = intialName;
    }

    function setName(string newName) public {
        name = newName;
    }
}
