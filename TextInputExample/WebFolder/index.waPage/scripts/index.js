
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var searchButton = {};	// @button
	var locationInput = {};	// @textField
	var colorInput = {};	// @textField
	var symbolInput = {};	// @textField
	var documentEvent = {};	// @document
// @endregion// @endlock
var activeInput = 0; //will hold the last active input for search button

function keypressHanlder(){
	
}

function searchInventory(inputNumber, keyCode){ //0,1,2 based on array above
	var inputs = ["symbol", "color", "location"]
	//You could restrict queries to only happen when enter keyCode is received
	sources.product.query(inputs[inputNumber] + " = :1", $$(inputs[inputNumber] + "Input").getValue() + "*");
	inputs.splice(inputs.indexOf(inputs[inputNumber]), 1); //removes the searched value from the array
	inputs.forEach(function(element){
		$$(element + "Input").setValue(""); //set non searched inputs to ""
	});
}
// eventHandlers// @lock

	searchButton.click = function searchButton_click (event)// @startlock
	{// @endlock
		searchInventory(activeInput, 0); //0 keyCode indicates a button push for searchInventory function
	};// @lock

	locationInput.keyup = function locationInput_keyup (event)// @startlock
	{// @endlock
		activeInput = 2;
		searchInventory(2, event.keyCode);
	};// @lock

	colorInput.keyup = function colorInput_keyup (event)// @startlock
	{// @endlock
		activeInput = 1;
		searchInventory(1, event.keyCode);
	};// @lock

	symbolInput.keyup = function symbolInput_keyup (event)// @startlock
	{// @endlock
		activeInput = 0;
		searchInventory(0, event.keyCode);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("searchButton", "click", searchButton.click, "WAF");
	WAF.addListener("locationInput", "keyup", locationInput.keyup, "WAF");
	WAF.addListener("colorInput", "keyup", colorInput.keyup, "WAF");
	WAF.addListener("symbolInput", "keyup", symbolInput.keyup, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
