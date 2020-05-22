
const BIGEGG = document.getElementById("egg_button");
const EGG_VALUE = document.getElementById("egg_value");
const EPS = document.getElementById("eps_value");

const BIRD_VALUE = document.getElementById("bird_value");
const BIRD_BUY = document.getElementById("bird_purchase");

const FARMER_VALUE = document.getElementById("farmer_value");
const FARMER_BUY = document.getElementById("farmer_purchase");

const UPGRADE_DESCRIPTION = document.getElementById('upgrade_description');
const UPGRADE_COST = document.getElementById('upgrade_cost');
const UPGRADE_SELECTOR = document.getElementById('upgrade_list');
const UPGRADE_PURCHASE = document.getElementById('upgrade_purchase');

const TECH_DESCRIPTION = document.getElementById('tech_description');
const TECH_COST = document.getElementById('tech_cost');
const TECH_SELECTOR = document.getElementById('tech_list');
const TECH_PURCHASE = document.getElementById('tech_purchase');

const techData = [
	{
		name : "Origin",
		cost : 10,
		description : "The start of the wrath of eggs.",
		children : [
			"Ornithology",
			"Feudalism"
		],
		"selected" : true
	},
	{
		name : "Ornithology",
		cost : 12,
		description : "Birds are cool!",
		children : []
	},
	{
		name : "Feudalism",
		cost : 15,
		description : "Farming class.",
		children : []
	}
]

var eggs = 0;
var birdCount = 0;
var farmerCount = 0;
var upgradesUnlocked = [];
var techUnlocked = [];
var selectedTech = "Origin";
addTech(getTech("Origin"));

function addClick() {
	var value = 1;
	if (upgradesUnlocked.includes("Upgrade 1"))
		value *= 2;
	eggs += value;
}

function addEPS() {
	eggs += calcEPS();
}

function calcBirdEPS() {
	var value = 0;
	value += birdCount * 0.1;
	if (upgradesUnlocked.includes("Upgrade 1"))
		value *= 2;
	return value;
}

function calcFarmerEPS() {
	var value = 0;
	value += farmerCount * 0.5;
	if (upgradesUnlocked.includes("Upgrade 2"))
		value *= 2;
	return value;
}

function calcEPS() {
	var value = 0;
	
	value += calcBirdEPS();
	
	value += calcFarmerEPS();
	
	return value;
}

function redrawValues() {
	if (eggs != 1)
		EGG_VALUE.innerHTML = `${Math.round(eggs)} eggs`;
	else
		EGG_VALUE.innerHTML = `${Math.round(eggs)} egg`;
	if (calcEPS() > 0) {
		if (calcEPS() != 1)
			EPS.innerHTML = `${ Math.round(calcEPS() * 10) / 10 } eggs per second`;
		else
			EPS.innerHTML = `${ Math.round(calcEPS() * 10) / 10 } egg per second`;
	}
	if (birdCount != 1)
		BIRD_VALUE.innerHTML = `${birdCount} birds`;
	else
		BIRD_VALUE.innerHTML = `${birdCount} bird`;
	if (getBirdCost() != 1)
		BIRD_BUY.innerHTML = `Purchase bird: ${getBirdCost()} eggs`;
	else
		BIRD_BUY.innerHTML = `Purchase bird: ${getBirdCost()} egg`;
	if (farmerCount != 1)
		FARMER_VALUE.innerHTML = `${farmerCount} farmers`;
	else
		FARMER_VALUE.innerHTML = `${farmerCount} farmer`;
	if (getFarmerCost() != 1)
		FARMER_BUY.innerHTML = `Purchase bird: ${getFarmerCost()} eggs`;
	else
		FARMER_BUY.innerHTML = `Purchase bird: ${getFarmerCost()} egg`;
	if (getTech(selectedTech).cost != 1)
		TECH_COST.textContent = `Cost: ${getTech(selectedTech).cost} eggs`;
	else
		TECH_COST.textContent = `Cost: ${getTech(selectedTech).cost} egg`;
	TECH_DESCRIPTION.textContent = getTech(selectedTech).description;
}

function getBirdCost() {
	return Math.round(15 * Math.pow(1.05, birdCount));
}

function getFarmerCost() {
	return Math.round(100 * Math.pow(1.05, farmerCount));
}

function getTech(nam) {
	for (var i = 0; i < techData.length; i++)
		if (techData[i].name === nam)
			return techData[i];
}

function addTech(technology) {
	TECH_SELECTOR.options.add( new Option(technology.name, technology.name, technology.selected) );
}

BIGEGG.addEventListener("click", addClick, false);

BIRD_BUY.addEventListener("click", (event) => {
	if (eggs >= getBirdCost()) {
		eggs -= getBirdCost();
		birdCount++;
	}
});

FARMER_BUY.addEventListener("click", (event) => {
	if (eggs >= getFarmerCost()) {
		eggs -= getFarmerCost();
		farmerCount++;
	}
});

TECH_SELECTOR.addEventListener('change', (event) => {
  selectedTech = event.target.value;
});

TECH_PURCHASE.addEventListener("click", function(){
	if (eggs >= getTech(selectedTech).cost) {
		eggs -= getTech(selectedTech).cost;
		techUnlocked.push(getTech(selectedTech).name);
		if (getTech(selectedTech).children.length > 0) {
			for (var i = 0; i < getTech(selectedTech).children.length; i++)
				addTech(getTech(getTech(selectedTech).children[i]));
		}
		TECH_SELECTOR.remove(TECH_SELECTOR.selectedIndex);
		selectedTech = TECH_SELECTOR.selectedOptions[0].value;
	}
}, false);

var gainTPS = setInterval(addEPS,1000);

var repeatRedraw = setInterval(redrawValues,1);
