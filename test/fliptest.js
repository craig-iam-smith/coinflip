const CoinFlip = artifacts.require("CoinFlip");
const truffleAssert = require("truffle-assertions");

contract("CoinFlip", async function(accounts){

	let betAmount = 200;
	let instance;

	before(async function(){
		instance = await CoinFlip.deployed()
	});
	it("flip a coin", async function () {
		await truffleAssert.passes(instance.FlipCoin({value: betAmount}), truffleAssert.ErrorType.REVERT);
	});
//   	let contractBalance = 0;
//   	let creationAmount = 1000;
//   	let localBalance = contractBalance;

//	it("shouldn't create a person with age over 150", async function (){
//    	await truffleAssert.fails(instance.createPerson("Bob", 200, 190, {value: creationAmount}), truffleAssert.ErrorType.REVERT);
//	});
//	it("shouldn't create a person without adequate payment", async function(){
//		await truffleAssert.fails(instance.createPerson("Alice", 50, 190, {value: 99}), truffleAssert.ErrorType.REVERT);
//	});
//	it("should allow owner to delete Person", async function(){
//    	let contractBalance = await(web3.eth.getBalance(instance.address));
//    	console.log ("Contract Balance");
//    	console.log (contractBalance);
//		await instance.createPerson("Bob", 50, 190, {value: 100});
//		await truffleAssert.passes(instance.deletePerson(accounts[1]), truffleAssert.ErrorType.REVERT);
//	});
//	it("shouldn't allow non-owner to delete Person", async function(){
//    	let contractBalance = await(web3.eth.getBalance(instance.address));
//    	console.log ("Contract Balance");
//    	console.log (contractBalance);
//		await instance.createPerson("Bob", 50, 190, {value: 100});
//		await truffleAssert.fails(instance.deletePerson(accounts[1], {from: accounts[2]}), truffleAssert.ErrorType.REVERT);
//	});
//	it("should allow specified owner to delete Person", async function(){
//    	let contractBalance = await(web3.eth.getBalance(instance.address));
//    	console.log ("Contract Balance");
//    	console.log (contractBalance);
//		await instance.createPerson("Bob", 50, 190, {value: 100});
//		await truffleAssert.passes(instance.deletePerson(accounts[1], {from: accounts[0]}), truffleAssert.ErrorType.REVERT);
//	});
//    it("keep track of the money", async function(){
//    	let contractBalance = await(web3.eth.getBalance(instance.address));
//    	console.log ("Contract Balance");
//    	console.log (contractBalance);
//    });

});
