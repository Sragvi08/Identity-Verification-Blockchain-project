// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract IdVerification {
    address private owner;

    struct DigitalID {
        address owner;  // ethereum addr
        string name;
        bool verified;
    }

    // Mapping from address (which is our wallet here) to DigitalID
    mapping(address => DigitalID) public digitalIDs;

    // Address of the government official
    address public governmentOfficial; 

    modifier onlyGovernmentOfficial() {
        require(msg.sender == governmentOfficial, "Only government official can access this function");
        _;
    }

    // Constructor to set the address of the government official
    constructor() {
        governmentOfficial = msg.sender;
    }

    // Function to issue a digital ID
    function issueDigitalID(address _citizenAddress, string memory _name) public {
        //  digital ID alredy present?
        require(!isDigitalIDExists(_citizenAddress), "Digital ID already exists for this citizen");

        // Create a new digital ID
        DigitalID memory newDigitalID = DigitalID({
            owner: _citizenAddress,
            name: _name,
            verified: false
        });

        // Store the digital ID
        digitalIDs[_citizenAddress] = newDigitalID;
    }


    // Function to verify a digital ID
    function verifyDigitalID(address _citizenAddress) public onlyGovernmentOfficial {
        // Check if the digital ID exists
        require(isDigitalIDExists(_citizenAddress), "Digital ID does not exist for this citizen");

        // Verify the digital ID
        digitalIDs[_citizenAddress].verified = true;
    }


    // Function to check if a digital ID exists for a citizen
    function isDigitalIDExists(address _citizenAddress) public view returns (bool) {
        return digitalIDs[_citizenAddress].owner != address(0);
    }

}