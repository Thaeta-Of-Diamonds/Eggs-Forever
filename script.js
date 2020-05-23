const BIGEGG = document.getElementById("egg_button");
const EGG_VALUE = document.getElementById("egg_value");
const EPS = document.getElementById("eps_value");

const BIRD_VALUE = document.getElementById("bird_value");
const BIRD_BUY = document.getElementById("bird_purchase");

const FARMER_VALUE = document.getElementById("farmer_value");
const FARMER_BUY = document.getElementById("farmer_purchase");

const BOAT_VALUE = document.getElementById("boat_value");
const BOAT_BUY = document.getElementById("boat_purchase");

const UPGRADE_DESCRIPTION = document.getElementById('upgrade_description');
const UPGRADE_COST = document.getElementById('upgrade_cost');
const UPGRADE_SELECTOR = document.getElementById('upgrade_list');
const UPGRADE_PURCHASE = document.getElementById('upgrade_purchase');
const UPGRADE_IMG = document.getElementById('upgrade_img');

const TECH_DESCRIPTION = document.getElementById('tech_description');
const TECH_COST = document.getElementById('tech_cost');
const TECH_SELECTOR = document.getElementById('tech_list');
const TECH_PURCHASE = document.getElementById('tech_purchase');
const TECH_IMG = document.getElementById('tech_img');

const HORIZ_BARS = document.getElementsByClassName('hl');
const VERTI_BARS = document.getElementsByClassName('vl');

const upgradeData = [
	{
		name : "",
		cost : "",
		description : "",
		image: "none.png"
	},
	{
		name : "Vibrant Plumage",
		cost : 200,
		description : "Birds are twice as efficient",
		image: "birdTech.png"
	},
	{
		name : "Sheer Determination",
		cost : 100,
		description : "The mouse is twice as efficient.",
		image: "origin.png"
	},
	{
		name : "Capitalism",
		cost : 1000,
		description : "Farmers are twice as efficient",
		image: "pitchfork.png"
	},
	{
		name : "Trawling Nets",
		cost : 5000,
		description : "Boats are twice as efficient",
		image: "deepNet.png"
	}
]

const techData = [
	{
		name : "",
		cost : "",
		description : "",
		image: "none.png"
	},
	{
		name : "Origin",
		cost : 10,
		description : "To perfect the world, you must first perfect yourself.",
		image: "origin.png"
	},
	{
		name : "Ornithology",
		cost : 100,
		description : "Unlocks bird upgrades.",
		image: "birdTech.png"
	},
	{
		name : "Feudalism",
		cost : 500,
		description : "Unlocks farmer upgrades.",
		image: "pitchfork.png"
	},
	{
		name : "Shipbuilding",
		cost : 2500,
		description : "Unlocks boat upgrades.",
		image: "deepNet.png"
	}
]

var eggs = 0;
var totalEggs = 0;
var birdCount = 0;
var farmerCount = 0;
var boatCount = 0;
var upgradesUnlocked = [];
var techUnlocked = [];
var milestones = [];
var selectedTech = "Origin";
var selectedUpgrade = "";

function addClick() {
	var value = 1;
	if (upgradesUnlocked.includes("Sheer Determination"))
		value *= 2;
	eggs += value;
	totalEggs += value;
}

function addEPS() {
	eggs += calcEPS();
	totalEggs += calcEPS();
}

function calcBirdEPS() {
	var value = 0;
	value += birdCount * 0.1;
	if (upgradesUnlocked.includes("Vibrant Plumage"))
		value *= 2;
	return value;
}

function calcFarmerEPS() {
	var value = 0;
	value += farmerCount * 0.5;
	if (upgradesUnlocked.includes("Capitalism"))
		value *= 2;
	return value;
}

function calcBoatEPS() {
	var value = 0;
	value += boatCount * 2.5;
	if (upgradesUnlocked.includes("Trawling Nets"))
		value *= 2;
	return value;
}

function calcEPS() {
	var value = 0;
	
	value += calcBirdEPS();
	
	value += calcFarmerEPS();
	
	value += calcBoatEPS();
	
	return value;
}

function redrawValues() {
	// Redraw Egg Data
	if (eggs != 1)
		EGG_VALUE.textContent = `${Math.round(eggs)} eggs`;
	else
		EGG_VALUE.textContent = `${Math.round(eggs)} egg`;
	if (calcEPS() > 0) {
		if (calcEPS() != 1)
			EPS.textContent = `${ Math.round(calcEPS() * 10) / 10 } eggs per second`;
		else
			EPS.textContent = `${ Math.round(calcEPS() * 10) / 10 } egg per second`;
	}
	// Redraw Bird Data
	if (birdCount != 1)
		BIRD_VALUE.textContent = `${birdCount} birds`;
	else
		BIRD_VALUE.textContent = `${birdCount} bird`;
	if (getBirdCost() != 1)
		BIRD_BUY.textContent = `Purchase bird: ${getBirdCost()} eggs`;
	else
		BIRD_BUY.textContent = `Purchase bird: ${getBirdCost()} egg`;
	if (getBirdCost() <= eggs)
		BIRD_BUY.style.color = "green";
	else
		BIRD_BUY.style.color = "red";
	// Redraw Farmer Data
	if (farmerCount != 1)
		FARMER_VALUE.textContent = `${farmerCount} farmers`;
	else
		FARMER_VALUE.textContent = `${farmerCount} farmer`;
	if (getFarmerCost() != 1)
		FARMER_BUY.textContent = `Purchase farmer: ${getFarmerCost()} eggs`;
	else
		FARMER_BUY.textContent = `Purchase farmer: ${getFarmerCost()} egg`;
	if (getFarmerCost() <= eggs)
		FARMER_BUY.style.color = "green";
	else
		FARMER_BUY.style.color = "red";
	// Redraw Boat Data
	if (farmerCount != 1)
		BOAT_VALUE.textContent = `${boatCount} boats`;
	else
		BOAT_VALUE.textContent = `${boatCount} boat`;
	if (getFarmerCost() != 1)
		BOAT_BUY.textContent = `Purchase boat: ${getBoatCost()} eggs`;
	else
		BOAT_BUY.textContent = `Purchase boat: ${getBoatCost()} egg`;
	if (getBoatCost() <= eggs)
		BOAT_BUY.style.color = "green";
	else
		BOAT_BUY.style.color = "red";
	// Redraw Tech Data
	if (getTech(selectedTech).cost === 1)
		TECH_COST.textContent = `Cost: ${getTech(selectedTech).cost} egg`;
	else if (getTech(selectedTech).cost === "")
		TECH_COST.textContent = "";
	else
		TECH_COST.textContent = `Cost: ${getTech(selectedTech).cost} eggs`;
	TECH_DESCRIPTION.textContent = getTech(selectedTech).description;
	TECH_IMG.src = getTech(selectedTech).image;
	if (getTech(selectedTech).cost <= eggs && getTech(selectedTech).cost != "")
		TECH_PURCHASE.style.color = "green";
	else
		TECH_PURCHASE.style.color = "red";
	// Redraw Upgrade Data
	if (getUpgrade(selectedUpgrade).cost === 1)
		UPGRADE_COST.textContent = `Cost: ${getUpgrade(selectedUpgrade).cost} egg`;
	else if (getUpgrade(selectedUpgrade).cost === "")
		UPGRADE_COST.textContent = "";
	else
		UPGRADE_COST.textContent = `Cost: ${getUpgrade(selectedUpgrade).cost} eggs`;
	if (getUpgrade(selectedUpgrade).cost <= eggs && getUpgrade(selectedUpgrade).cost != "")
		UPGRADE_PURCHASE.style.color = "green";
	else
		UPGRADE_PURCHASE.style.color = "red";
	// Resize depending on window size
	UPGRADE_DESCRIPTION.textContent = getUpgrade(selectedUpgrade).description;
	UPGRADE_IMG.src = getUpgrade(selectedUpgrade).image;
	BIGEGG.style.width = `${window.innerWidth / 4}px`;
	for (var i = 0; i < HORIZ_BARS.length; i++)
		HORIZ_BARS[i].style.width = `${window.innerWidth - 20}px`;
	for (var i = 0; i < VERTI_BARS.length; i++)
		VERTI_BARS[i].style.height = `${window.innerHeight - 60}px`;
}

function getBirdCost() {
	return Math.round(20 * Math.pow(1.05, birdCount));
}

function getFarmerCost() {
	return Math.round(100 * Math.pow(1.05, farmerCount));
}

function getBoatCost() {
	return Math.round(500 * Math.pow(1.05, boatCount));
}

function getTech(nam) {
	for (var i = 0; i < techData.length; i++)
		if (techData[i].name === nam)
			return techData[i];
}

function addTech(technology) {
	TECH_SELECTOR.options.add( new Option(technology.name, technology.name, technology.selected) );
	selectedTech = TECH_SELECTOR.selectedOptions[0].value;
}

function getUpgrade(nam) {
	for (var i = 0; i < upgradeData.length; i++)
		if (upgradeData[i].name === nam)
			return upgradeData[i];
}

function addUpgrade(upgrade) {
	UPGRADE_SELECTOR.options.add( new Option(upgrade.name, upgrade.name, upgrade.selected) );
	selectedUpgrade = UPGRADE_SELECTOR.selectedOptions[0].value;
}

function handleMilestones() {
	if (techUnlocked.includes("Origin") && ! milestones.includes("Origin")) {
		milestones.push("Origin");
		addUpgrade(getUpgrade("Sheer Determination"));
		toggleElement("upgrades");
	}
	if (birdCount >= 1 && milestones.includes("Origin") && ! milestones.includes("OrnithologyUnlock")) {
		milestones.push("OrnithologyUnlock");
		addTech(getTech("Ornithology"));
	}
	if (farmerCount >= 1 && milestones.includes("Origin") && ! milestones.includes("FeudalismUnlock")) {
		milestones.push("FeudalismUnlock");
		addTech(getTech("Feudalism"));
	}
	if (boatCount >= 1 && milestones.includes("Origin") && ! milestones.includes("ShipbuildingUnlock")) {
		milestones.push("ShipbuildingUnlock");
		addTech(getTech("Shipbuilding"));
	}
	if (techUnlocked.includes("Ornithology") && ! milestones.includes("Ornithology")) {
		milestones.push("Ornithology");
		addUpgrade(getUpgrade("Vibrant Plumage"));
	}
	if (techUnlocked.includes("Feudalism") && ! milestones.includes("Feudalism")) {
		milestones.push("Feudalism");
		addUpgrade(getUpgrade("Capitalism"));
	}
	if (techUnlocked.includes("Shipbuilding") && ! milestones.includes("Shipbuilding")) {
		milestones.push("Shipbuilding");
		addUpgrade(getUpgrade("Trawling Nets"));
	}
	if (totalEggs >= 20 && ! milestones.includes("birdUnlock")) {
		milestones.push("birdUnlock");
		toggleElement("bird_section");
	}
	if (totalEggs >= 100 && ! milestones.includes("farmerUnlock")) {
		milestones.push("farmerUnlock");
		toggleElement("farmer_section");
		toggleElement("tech");
	}
	if (totalEggs >= 500 && ! milestones.includes("boatUnlock")) {
		milestones.push("boatUnlock");
		toggleElement("boat_section");
	}
}

function toggleElement(imp) {
  var x = document.getElementById(imp);
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function purchaseBird() {
	if (eggs >= getBirdCost()) {
		eggs -= getBirdCost();
		birdCount++;
	}
}

function purchaseFarmer() {
	if (eggs >= getFarmerCost()) {
		eggs -= getFarmerCost();
		farmerCount++;
	}
}

function purchaseBoat() {
	if (eggs >= getBoatCost()) {
		eggs -= getBoatCost();
		boatCount++;
	}
}

BIGEGG.addEventListener("click", addClick, false);

BIRD_BUY.addEventListener("click", purchaseBird, false);

FARMER_BUY.addEventListener("click", purchaseFarmer, false);

BOAT_BUY.addEventListener("click", purchaseBoat, false);

TECH_SELECTOR.addEventListener('change', (event) => {
  selectedTech = event.target.value;
});

TECH_PURCHASE.addEventListener("click", function(){
	if (eggs >= getTech(selectedTech).cost) {
		eggs -= getTech(selectedTech).cost;
		techUnlocked.push(getTech(selectedTech).name);
		TECH_SELECTOR.remove(TECH_SELECTOR.selectedIndex);
		if (TECH_SELECTOR.selectedOptions.length === 0)
			selectedTech = "";
		else
			selectedTech = TECH_SELECTOR.selectedOptions[0].value;
	}
}, false);

UPGRADE_SELECTOR.addEventListener('change', (event) => {
  selectedUpgrade = event.target.value;
});

UPGRADE_PURCHASE.addEventListener("click", function(){
	if (eggs >= getUpgrade(selectedUpgrade).cost) {
		eggs -= getUpgrade(selectedUpgrade).cost;
		upgradesUnlocked.push(getUpgrade(selectedUpgrade).name);
		UPGRADE_SELECTOR.remove(UPGRADE_SELECTOR.selectedIndex);
		if (UPGRADE_SELECTOR.selectedOptions.length === 0)
			selectedUpgrade = "";
		else
			selectedUpgrade = UPGRADE_SELECTOR.selectedOptions[0].value;
	}
}, false);

var gainEPS = setInterval(addEPS,1000);

var repeatRedraw = setInterval(redrawValues,1);

var repeatMilestones = setInterval(handleMilestones,1);

addTech(getTech("Origin"));

toggleElement("bird_section");

toggleElement("farmer_section");

toggleElement("boat_section");

toggleElement("upgrades");

toggleElement("tech");
