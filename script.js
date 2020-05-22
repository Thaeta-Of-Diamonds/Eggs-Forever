
const BIGTHING = document.querySelector("#thing-button");
const THING = document.querySelector("#thing-value");
const TPS = document.querySelector("#tps-value");

const BUILDING1 = document.querySelector("#building1-value");
const BUILDING1BUY = document.querySelector("#building1-purchase");

const BUILDING2 = document.querySelector("#building2-value");
const BUILDING2BUY = document.querySelector("#building2-purchase");

const UPGRADE1 = document.querySelector("#upgrade1");
const UPGRADE2 = document.querySelector("#upgrade2");

var things = 0;
var building1 = 0;
var building2 = 0;
var upgrades = [];

function addClick() {
	var value = 1;
	if (upgrades.includes("Upgrade 1"))
		value *= 2;
	things += value;
}

function addTPS() {
	things += calcTPS();
}

function calcBuilding1TPS() {
	var value = 0;
	value += building1 * 0.1;
	if (upgrades.includes("Upgrade 1"))
		value *= 2;
	return value;
}

function calcBuilding2TPS() {
	var value = 0;
	value += building2 * 0.5;
	if (upgrades.includes("Upgrade 2"))
		value *= 2;
	return value;
}

function calcTPS() {
	var value = 0;
	
	value += calcBuilding1TPS();
	
	value += calcBuilding2TPS();
	
	return value;
}

function redrawValues() {
	if (things > 0)
		THING.innerHTML = `${Math.round(things)} things`;
	if (calcTPS() > 0)
		TPS.innerHTML = `${Math.round(calcTPS() * 10) / 10} things per second`;
	if (building1 > 0)
		BUILDING1.innerHTML = `${building1} building1`;
	BUILDING1BUY.innerHTML = `Purchase building1: ${getBuilding1Cost()} things`;
	if (building2 > 0)
		BUILDING2.innerHTML = `${building2} building2`;
	BUILDING2BUY.innerHTML = `Purchase building1: ${getBuilding2Cost()} things`;
}

function getBuilding1Cost() {
	return Math.round(15 * Math.pow(1.05, building1));
}

function getBuilding2Cost() {
	return Math.round(100 * Math.pow(1.05, building2));
}

function purchaseBuilding2() {
	if (things >= getBuilding2Cost()) {
		building2++;
		things -= getBuilding2Cost();
	}
}

function purchaseBuilding1() {
	if (things >= getBuilding1Cost()) {
		building1++;
		things -= getBuilding1Cost();
	}
}

BIGTHING.addEventListener("click", addClick, false);

BUILDING1BUY.addEventListener("click", purchaseBuilding1, false);

BUILDING2BUY.addEventListener("click", purchaseBuilding2, false);

UPGRADE1.addEventListener("click", function(){
	if (eggs >= 100) {
		upgrades.push("Upgrade 1")
		eggs -= 100
	}
}, false);

UPGRADE2.addEventListener("click", function(){
	if (eggs >= 500) {
		upgrades.push("Upgrade 2")
		eggs -= 500
	}
}, false);

var gainTPS = setInterval(addTPS,1000);

var repeatRedraw = setInterval(redrawValues,1);
