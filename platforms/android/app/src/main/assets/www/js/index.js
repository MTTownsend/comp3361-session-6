var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var key;
var value;


document.addEventListener("deviceready", onDeviceReady, false);

		
	
function updateDisplay() {
	//document.getElementById("launched").innerHTML="Application launched: " + launched_count;
	//document.getElementById("paused").innerHTML="Application paused: " + paused_count;
	//document.getElementById("resumed").innerHTML="Application resumed: " + resumed_count;
	$("#launched").text("Application launched: " + launched_count);
	$("#paused").text("Application paused: " + paused_count);
	$("#resumed").text("Application resumed: " + resumed_count);
	$(document).bind("mobileinit", function() {
		//apply overrides here
		$.mobile.page.prototype.options.addBackBtn = true;
	});
	
}


// device APIs are available
//
    function onDeviceReady() {
	
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		//document.addEventListener("backbutton", onBackFunction, false);

		launched_count++;
		addToStorage();
		setDietCoke();
		getStorage();
		getDietCoke();
		updateDisplay();
			
		alert("device ready");
	}
	
	/*function onBackFunction() {
		
	}*/


	function onPause() {
	
	paused_count++;
	updateDisplay();
	
	alert("pause");
	}
	

	function onResume() {
		
	resumed_count++;
	updateDisplay();
		
	alert("resume");
	}
	
	function addToStorage(){

		key = "Drink";
		value = "Diet Coke";
		
		window.localStorage.setItem(key, value);
		
		key = "Phone";
		value = "IPhone X";
		
		window.localStorage.setItem(key, value);
		
		key = "Money";
		value = "Cash";
		
		window.localStorage.setItem(key, value);
		
		key = "Cards";
		value = "MTG";
		
		window.localStorage.setItem(key, value);
		
		key = "Bag";
		value = "Rucksack";
		
		window.localStorage.setItem(key, value);
	}
	
	function getStorage(){
				
		key = "Drink";
		value = window.localStorage.getItem(key);
		$("#myDrink").text(value);
		
		key = "Phone";
		value = window.localStorage.getItem(key);
		$("#myPhone").text(value);
		
		key = "Money";
		value = window.localStorage.getItem(key);
		$("#myMoney").text(value);
		
		key = "Cards";
		value = window.localStorage.getItem(key);
		$("#myCards").text(value);
		
		key = "Bag";
		value = window.localStorage.getItem(key);
		$("#myBag").text(value);	

	}
	
	function getDietCoke(){
		
		key = "Diet Coke";
		value = JSON.parse(window.localStorage.getItem(key));
		$("#my_dietCoke_Dose").text(value.Dosage);
		$("#my_dietCoke_Energy1").text(value.Energy.Joules);
		$("#my_dietCoke_Energy2").text(value.Energy.kcal);
		$("#my_dietCoke_CarbTot").text(value.Carbs.Total);
		$("#my_dietCoke_CarbSug").text(value.Carbs.Sugars);
		
	}
	
	function setDietCoke(){
		var dietCoke = {
			"Dosage":"100ml",
			"Energy":{
				"Joules":"1.6kJ",
				"kcal":"0.4kcal"
			},
			"Carbs":{
				"Total":"0g",
				"Sugars":"0g"
			}
		};
		
		key = "Diet Coke";
		value = JSON.stringify(dietCoke);
		window.localStorage.setItem(key, value);
	}
	
