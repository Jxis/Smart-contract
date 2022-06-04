//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; // verzija soliditija

contract Transactions {
    // kao klasa
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions; // arrey of transferstruct transakcija

    function addToBlockchain(
        address payable receiver,
        uint256 amonut,
        string memory message,
        string memory keyword
    ) public {
        transactionCount++;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amonut,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amonut,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
