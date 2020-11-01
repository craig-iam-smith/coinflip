// coinflip.sol
import "./Ownable.sol";
pragma solidity 0.5.12;

contract CoinFlip is Ownable{

    struct Player {
    	uint Balance;
    }

    uint public ContractBalance;

    modifier costs(uint cost){
        require(msg.value >= cost);
        _;
    }

    mapping (address => Player) private players;

    function FlipCoin() public payable costs(100 wei){
	}

	function CashOut() public returns(uint) {
		uint cashout;

		cashout = players[msg.sender].Balance;
		players[msg.sender].Balance = 0;
		msg.sender.transfer(cashout);
		return 1;
	}

   function withdrawAll() public onlyOwner returns(uint) {
       uint toTransfer = ContractBalance;
       ContractBalance = 0;
       msg.sender.transfer(toTransfer);
       return toTransfer;
   }

}