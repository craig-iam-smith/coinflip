var web3 = new Web3(Web3.givenProvider);
var contractInstance;
$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){  // web3 connect wallet
    	contractInstance = new web3.eth.Contract(abi, "0xdF1d20Ce7f8647A75c3b63c7AB8C7Da914A13C57");
    	console.log(contractInstance);
    });
    $("#add_data_button").click(inputData)
    $("#get_data_button").click(fetchAndDisplay)
    
});

function inputData(){
	var name = $("#name_input").val();
	var age = $("#age_input").val();
	var height = $("#height_input").val();
	var config = {
		value: 100,
		from: "0x90b68F34AD343250A4acBC6bAF27adFA8DCFd0bD"
	}
//	var config1 = {
//		value: 100,
//		from: accounts[0]
//	}



	contractInstance.methods.createPerson(name, age, height).send(config)
	.on("trasctionHash", function(hash){
	    console.log(hash);
	})
	.on("confirmation", function(confirmationNr){
		consold.log(confirmationNr);

	})
	.on("receipt", function(receipt){
		console.log(receipt);
		alert("Completed");
	})
}

function fetchAndDisplay(){
	contractInstance.methods.getPerson().call().then(function(res){
//	console.log(res);
	$("#name_output").text(res.name);
	$("#age_output").text(res.age);
	$("#height_output").text(res.height);
	})
}