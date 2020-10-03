const BIGEGG = document.getElementById("egg_button");
const EGG_VALUE = document.getElementById("egg_value");
const EPS = document.getElementById("eps_value");

const BIRD_VALUE = document.getElementById("bird_value");
const BIRD_BUY = document.getElementById("bird_purchase");

const FARMER_VALUE = document.getElementById("farmer_value");
const FARMER_BUY = document.getElementById("farmer_purchase");

const BAKERY_VALUE = document.getElementById("bakery_value");
const BAKERY_BUY = document.getElementById("bakery_purchase");

const BOAT_VALUE = document.getElementById("boat_value");
const BOAT_BUY = document.getElementById("boat_purchase");

const MINE_VALUE = document.getElementById("mine_value");
const MINE_BUY = document.getElementById("mine_purchase");

const WELL_VALUE = document.getElementById("well_value");
const WELL_BUY = document.getElementById("well_purchase");

const FACTORY_VALUE = document.getElementById("factory_value");
const FACTORY_BUY = document.getElementById("factory_purchase");

const SUPPLY_VALUE = document.getElementById("supply_value");
const SUPPLY_BUY = document.getElementById("supply_purchase");

const STARSHIP_VALUE = document.getElementById("starship_value");
const STARSHIP_BUY = document.getElementById("starship_purchase");

const SPACESTAT_VALUE = document.getElementById("spacestat_value");
const SPACESTAT_BUY = document.getElementById("spacestat_purchase");

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
const TECH_VALUE = document.getElementById('tech_value');

const MISSION_DESCRIPTION = document.getElementById('mission_description');
const MISSION_BAR = document.getElementById('mission_bar');
const MISSION_SELECTOR = document.getElementById('mission_list');

const PARADISE_IMG = document.getElementById('paradise_img');
const PARADISE_INFO = document.getElementById('paradise_info');
const PARADISE_VALUE = document.getElementById('paradise_value');

const HORIZ_BARS = document.getElementsByClassName('hl');
const VERTI_BARS = document.getElementsByClassName('vl');

const LEFT_DIV = document.getElementsByClassName('left')[0];
const CENTER_DIV = document.getElementsByClassName('center')[0];
const RIGHT_DIV = document.getElementsByClassName('right')[0];

/*
	Upgrade Effect Format:
	
	First 3 chars: what effect
	
	Number after that: intensity of effect
	
	Effect keys:
	
		mse: Mouse power %
		
		eps: Egg production multiplier %
		
		pma: Paradise bird magicality %
		
		rge: Research generation %
		
		rmx: Research maximum %
		
		brd: Bird multiplier %
		
		frm: Farmer multiplier %
		
		bak: Bakery multiplier %
		
		bot: Boat multiplier %
		
		min: Mine multiplier %
		
		wel: Well multiplier %
		
		fac: Factory multiplier %
		
		sup: Supply chain multiplier %
		
		sta: Starship multiplier %
		
		spa: Space Station multiplier %
		
*/

const upgradeData = [
	{
		name : "",
		cost : "",
		description : "",
		image: "img/none.png",
		features: [],
		effects: []
	},
	{
		name : "Eggcellent Goals",
		cost : 100,
		description : "The mouse is twice as efficient.",
		image: "img/none.png",
		features: [],
		effects: ["mse100"]
	},
	{
		name : "Duck Eggs",
		cost : 1000,
		description : "Egg production multiplier +1%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps1"]
	},
	{
		name : "Robin Eggs",
		cost : 2000,
		description : "Egg production multiplier +1%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps1"]
	},
	{
		name : "Turkey Eggs",
		cost : 3000,
		description : "Egg production multiplier +1% per 10 farmers.",
		image: "img/none.png",
		features: ["egg"],
		effects: []
	},
	{
		name : "Egg Salad",
		cost : 5000,
		description : "Bakeries are twice as efficient.",
		image: "img/none.png",
		features: [],
		effects: ["bak100"]
	},
	{
		name : "Deviled Eggs",
		cost : 7000,
		description : "Egg production multiplier +1%.",
		image: "img/none.png",
		features: [],
		effects: ["eps1"]
	},
	{
		name : "Egg Noodles",
		cost : 9000,
		description : "Egg production multiplier +1%.",
		image: "img/none.png",
		features: [],
		effects: ["eps1"]
	},
	{
		name : "Ostrich Eggs",
		cost : 10000,
		description : "Egg production multiplier +2%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps2"]
	},
	{
		name : "Eagle Eggs",
		cost : 20000,
		description : "Egg production multiplier +2%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps2"]
	},
	{
		name : "Parrot Eggs",
		cost : 30000,
		description : "Boats are 50% more efficient.\nEgg production multiplier +1%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["bot50","eps1"]
	},
	{
		name : "Stolen Waterfall Egg",
		cost : 100000,
		description : "Paradise birds are 5% more magical.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["pma5"]
	},
	{
		name : "Stolen Reef Egg",
		cost : 150000,
		description : "Paradise birds are 5% more magical.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["pma5"]
	},
	{
		name : "Stolen Oasis Egg",
		cost : 200000,
		description : "Paradise birds are 5% more magical.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["pma5"]
	},
	{
		name : "Necessary Corruption",
		cost : 100000,
		description : "Mines, factories, wells and supply chains are twice as efficient.",
		image: "img/none.png",
		features: [],
		effects: ["min100","fac100","wel100","sup100"]
	},
	{
		name : "Manipulate the Market",
		cost : 150000,
		description : "You gain +1% EpS per Supply Chain",
		image: "img/none.png",
		features: [],
		effects: []
	},
	{
		name : "Illegal Assets",
		cost : 200000,
		description : "Summons 5 paradise eggs.",
		image: "img/none.png",
		features: [],
		effects: []
	},
	{
		name : "Promethium Capacitors",
		cost : 100000,
		description : "Maximum research is twice as large.",
		image: "img/none.png",
		features: [],
		effects: ["rmx100"]
	},
	{
		name : "Erbium Resistors",
		cost : 150000,
		description : "Mines gain +1% EpS per 10 unspent research.",
		image: "img/none.png",
		features: [],
		effects: []
	},
	{
		name : "Yttrium Transistors",
		cost : 200000,
		description : "Research is twice as efficient.",
		image: "img/none.png",
		features: [],
		effects: ["rgn100"]
	},
	{
		name : "Pure Yolk",
		cost : 100,
		description : "Egg production multiplier +100%.",
		image: "img/none.png",
		features: [],
		effects: ["eps100"]
	},
	{
		name : "Compressed Yolk",
		cost : 70000,
		description : "Wells gain +5% EpS for each Egg upgrade you own.",
		image: "img/none.png",
		features: [],
		effects: []
	},
	{
		name : "Custard Fracking",
		cost : 80000,
		description : "Egg production multiplier +2%.",
		image: "img/none.png",
		features: [],
		effects: ["eps2"]
	},
	{
		name : "Cambrian Egg",
		cost : 1000000,
		description : "Egg production multiplier +10%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps10"]
	},
	{
		name : "Chronozone Egg",
		cost : 2000000,
		description : "Egg production multiplier +10%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps10"]
	},
	{
		name : "Cenozoic Egg",
		cost : 3000000,
		description : "Unlocks research complexes.",
		image: "img/none.png",
		features: ["egg"],
		effects: []
	},
	{
		name : "Exotic Omelette",
		cost : 1000000,
		description : "Egg production multiplier +10%.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps10"]
	},
	{
		name : "Seven-dimensional Egg",
		cost : 2000000,
		description : "Egg production multiplier +7%.\nParadise birds are 7% more magical.",
		image: "img/none.png",
		features: ["egg"],
		effects: ["eps7","pma7"]
	},
	{
		name : "Portal to the Ancients",
		cost : 3000000,
		description : "Unlocks portals.",
		image: "img/none.png",
		features: [],
		effects: []
	}
]

const techData = [
	{
		name : "",
		cost : "",
		description : "",
		image: "img/none.png"
	},
	{
		name : "Origin",
		cost : 10,
		description : "To perfect the world, you must first perfect yourself.",
		image: "img/basicEgg.png"
	},
	{
		name : "Farming",
		cost : 15,
		description : "Unlocks farmers.",
		image: "img/basicScythe.png"
	},
	{
		name : "Sliced Bread",
		cost : 30,
		description : "Unlocks bakeries.",
		image: "img/basicOven.png"
	},
	{
		name : "Shipbuilding",
		cost : 60,
		description : "Unlocks boats.",
		image: "img/basicAnchor.png"
	},
	{
		name : "Mining",
		cost : 80,
		description : "Unlocks mines.",
		image: "img/basicCave.png"
	},
	{
		name : "Solid Pumping",
		cost : 100,
		description : "Unlocks wells.",
		image: "img/basicWell.png"
	},
	{
		name : "Industry",
		cost : 120,
		description : "Unlocks factories.",
		image: "img/basicFactory.png"
	},
	{
		name : "Egg Agendas",
		cost : 140,
		description : "Unlocks supply chains.",
		image: "img/basicSupply.png"
	},
	{
		name : "Interstellar Drive",
		cost : 170,
		description : "Unlocks starships.",
		image: "img/basicHyperdrive.png"
	},
	{
		name : "Stellar Hubs",
		cost : 200,
		description : "Unlocks space stations.",
		image: "img/basicSpaceStat.png"
	},
	{
		name : "Biodiversity",
		cost : 30,
		description : "Unlocks a variety of eggs.",
		image: "img/bubbleScythe.png"
	},
	{
		name : "Ancient Recipe Book",
		cost : 45,
		description : "Unlocks recipes.",
		image: "img/bubbleOven.png"
	},
	{
		name : "ETN (Egg Trade Network)",
		cost : 60,
		description : "Unlocks more eggs.",
		image: "img/bubbleAnchor.png"
	},
	{
		name : "Rare Metals",
		cost : 80,
		description : "Unlocks technology upgrades.",
		image: "img/bubbleCave.png"
	},
	{
		name : "Illegal Fracking",
		cost : 100,
		description : "Unlocks industrial upgrades.",
		image: "img/bubbleWell.png"
	},
	{
		name : "Criminality",
		cost : 120,
		description : "Unlocks crime rings & more illegal opportunities.\nIf you unlock this, you will not be able to unlock Globalization.",
		image: "img/bubbleFactory.png"
	},
	{
		name : "Mission Plans",
		cost : 20,
		description : "Unlocks missions. Only one mission may be active at a time, but more can be saved for later.",
		image: "img/bubbleEgg.png"
	},
	{
		name : "Globalization",
		cost : 120,
		description : "Unlocks trade centers & more economic opportunities.\nIf you unlock this, you will not be able to unlock Criminality.",
		image: "img/bubbleFactory.png"
	},
	{
		name : "Glimpse of Paradise",
		cost : 140,
		description : "Unlocks paradise eggs.",
		image: "img/bubbleSupply.png"
	},
	{
		name : "Scientific Revolution",
		cost : 170,
		description : "Unlocks research laboratories & more scientific opportunities.\nIf you unlock this, you will not be able to unlock Fanatical Religion.",
		image: "img/bubbleHyperdrive.png"
	},
	{
		name : "Fanatical Religion",
		cost : 170,
		description : "Unlocks trade centers & more magical opportunities.\nIf you unlock this, you will not be able to unlock Scientific Revolution.",
		image: "img/bubbleHyperdrive.png"
	},
	{
		name : "Arboretum Heist",
		cost : 150,
		description : "Begins a new mission to capture paradise eggs.",
		image: "img/none.png"
	},
	{
		name : "Path of Enlightenment",
		cost : 25,
		description : "Begins a new mission to achieve transendence.",
		image: "img/none.png"
	},
	{
		name : "Government Takeover",
		cost : 150,
		description : "Begins a new mission to gain control of world governments.",
		image: "img/none.png"
	},
	{
		name : "Genetic Engineering",
		cost : 250,
		description : "Begins a new mission to create more powerful eggs.",
		image: "img/none.png"
	},
	{
		name : "Ancient Texts",
		cost : 250,
		description : "Begins a new mission to gain the power of the Ancients.",
		image: "img/none.png"
	}
]

const missionData = [
	{
		name : "",
		required : "",
		description : ""
	},
	{
		name : "Arboretum Heist",
		required : 1000,
		description : "Click the big egg 1000 times."
	},
	{
		name : "Hide the Evidence",
		required : 100000,
		description : "Produce 100000 eggs."
	},
	{
		name : "Make the Escape",
		required : 1,
		description : "Harvest a paradise egg."
	},
	{
		name : "Government Takeover",
		required : 1000,
		description : "Click the big egg 1000 times."
	},
	{
		name : "Bribe Officials",
		required : 1,
		description : "Harvest a paradise egg."
	},
	{
		name : "Pull the Strings",
		required : 50,
		description : "Own 50 supply chains."
	},
	{
		name : "Path of Enlightenment",
		required : 100,
		description : "Produce 100 eggs from birds alone."
	},
	{
		name : "Ancient Texts",
		required : 25,
		description : "Own 25 starships."
	},
	{
		name : "Contact the Ancients",
		required : 10000000,
		description : "Produce 10000000 eggs."
	},
	{
		name : "Discover the monolith",
		required : 5000,
		description : "Click the big egg 5000 times."
	},
	{
		name : "Genetic Engineering",
		required : 3,
		description : "Own 3 space stations."
	},
	{
		name : "Remap the Genome",
		required : 10000000,
		description : "Produce 10000000 eggs."
	},
	{
		name : "Ideal Beings",
		required : 5000,
		description : "Click the big egg 5000 times."
	}
]

const paradiseData = [
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-basic.png",
		name: "",
		description: "Ḇ̴͙͙̳̳̭͍̊ͅE̵̛͓̰͔̘̣͊̀̈̉̃͋͗Ģ̸͍̙̳͇̥̩̅̓̑͊̒̈́O̵͍̟͔͍͍̓̋̀̐̆̐̋̈́̓͘͠Ń̶̠̼̺̹̹̒̇̓͑͒̈Ę̸̠̤̫̞̤͍̳̻̩̳͙̈́̅",
		duration: 0,
		produceMax: 0,
		produceMin: 0
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-basic.png",
		name: "Bird",
		description: "This bird is boring, and has no interesting abilities.<br>• +5% EpS.",
		duration: 14400,
		produceMax: 1,
		produceMin: 1
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-galaxy.png",
		name: "Nebula Eagle",
		description: "This bird gives you the powers of space and time.<br>• Starships and space stations are twice as efficient.<br>• +7% EpS.",
		duration: 43200,
		produceMax: 2,
		produceMin: 4
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-garden.png",
		name: "Birds of Paradise",
		description: "This bird connects you back to nature.<br>• Birds and farmers are ten times as efficient.<br>• +7% EpS.",
		duration: 72000,
		produceMax: 1,
		produceMin: 9
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-flame.png",
		name: "Pheonix",
		description: "This bird empowers the flames around you.<br>• Factories are twice as efficient.<br>• You gain +1% EpS for each factory.",
		duration: 28800,
		produceMax: 2,
		produceMin: 2
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-air.png",
		name: "Roc",
		description: "This bird controls the weather in your favor.<br>• The mouse is twice as efficient.<br>• +10% EpS.",
		duration: 21600,
		produceMax: 1,
		produceMin: 2
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-water.png",
		name: "Sea Serpent",
		description: "This serpent controls rivers and lakes.<br>• Boats and supply chains are twice as effeicient.<br>• +8% EpS.",
		duration: 36000,
		produceMax: 2,
		produceMin: 3
	},
	{
		bird: "img/none.png",
		egg: "img/paradiseEgg-earth.png",
		name: "Zaratan",
		description: "This turtle thunders the earth and loosens the dirt.<br>• Mines and wells are twice as efficient.<br>• +6% EpS.",
		duration: 50400,
		produceMax: 2,
		produceMin: 5
	}
]

const paradiseGen = {
	0: "Nebula Eagle",
	1: "Birds of Paradise",
	2: "Pheonix",
	3: "Roc",
	4: "Sea Serpent",
	5: "Zaratan"
}

var eggs = 0;
var research = 0;
var totalEggs = 0;
var birdCount = 0;
var farmerCount = 0;
var bakeryCount = 0;
var boatCount = 0;
var mineCount = 0;
var wellCount = 0;
var factoryCount = 0;
var supplyCount = 0;
var starshipCount = 0;
var spacestatCount = 0;
var missionProgress = 0;
var missionRequired = 0;
var gameSpeed = 1;
var upgradesUnlocked = [];
var techUnlocked = [];
var milestones = [];
var selectedTech = "Origin";
var selectedUpgrade = "";
var selectedMission = "";
var listFreeze = false;
var paradiseEggs = 0;
var paradiseCounter = 0;
var paradisePhase = "";
var paradiseBird = "";

/*	|---------------------|
	| IMPORTANT FUNCTIONS |
	|---------------------|*/

/*	|----------------|
	| redrawValues() |
	|----------------|*/

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
	BIRD_BUY.innerHTML = `${getBirdCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getBirdCost() <= eggs)
		BIRD_BUY.style.color = "green";
	else
		BIRD_BUY.style.color = "red";
	// Redraw Farmer Data
	if (farmerCount != 1)
		FARMER_VALUE.textContent = `${farmerCount} farmers`;
	else
		FARMER_VALUE.textContent = `${farmerCount} farmer`;
	FARMER_BUY.innerHTML = `${getFarmerCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getFarmerCost() <= eggs)
		FARMER_BUY.style.color = "green";
	else
		FARMER_BUY.style.color = "red";
	// Redraw Bakery Data
	if (bakeryCount != 1)
		BAKERY_VALUE.textContent = `${bakeryCount} bakeries`;
	else
		BAKERY_VALUE.textContent = `${bakeryCount} bakery`;
	BAKERY_BUY.innerHTML = `${getBakeryCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getBakeryCost() <= eggs)
		BAKERY_BUY.style.color = "green";
	else
		BAKERY_BUY.style.color = "red";
	// Redraw Boat Data
	if (boatCount != 1)
		BOAT_VALUE.textContent = `${boatCount} boats`;
	else
		BOAT_VALUE.textContent = `${boatCount} boat`;
	BOAT_BUY.innerHTML = `${getBoatCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getBoatCost() <= eggs)
		BOAT_BUY.style.color = "green";
	else
		BOAT_BUY.style.color = "red";
	// Redraw Mine Data
	if (mineCount != 1)
		MINE_VALUE.textContent = `${mineCount} mines`;
	else
		MINE_VALUE.textContent = `${mineCount} mine`;
	MINE_BUY.innerHTML = `${getMineCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getMineCost() <= eggs)
		MINE_BUY.style.color = "green";
	else
		MINE_BUY.style.color = "red";
	// Redraw Well Data
	if (wellCount != 1)
		WELL_VALUE.textContent = `${wellCount} wells`;
	else
		WELL_VALUE.textContent = `${wellCount} well`;
	WELL_BUY.innerHTML = `${getWellCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getWellCost() <= eggs)
		WELL_BUY.style.color = "green";
	else
		WELL_BUY.style.color = "red";
	// Redraw Factory Data
	if (factoryCount != 1)
		FACTORY_VALUE.textContent = `${factoryCount} factories`;
	else
		FACTORY_VALUE.textContent = `${factoryCount} factory`;
	FACTORY_BUY.innerHTML = `${getFactoryCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getFactoryCost() <= eggs)
		FACTORY_BUY.style.color = "green";
	else
		FACTORY_BUY.style.color = "red";
	// Redraw Supply Data
	if (supplyCount != 1)
		SUPPLY_VALUE.textContent = `${supplyCount} supply chains`;
	else
		SUPPLY_VALUE.textContent = `${supplyCount} supply chain`;
	SUPPLY_BUY.innerHTML = `${getSupplyCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getSupplyCost() <= eggs)
		SUPPLY_BUY.style.color = "green";
	else
		SUPPLY_BUY.style.color = "red";
	// Redraw Starship Data
	if (starshipCount != 1)
		STARSHIP_VALUE.textContent = `${starshipCount} starships`;
	else
		STARSHIP_VALUE.textContent = `${starshipCount} starship`;
	STARSHIP_BUY.innerHTML = `${getStarshipCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getStarshipCost() <= eggs)
		STARSHIP_BUY.style.color = "green";
	else
		STARSHIP_BUY.style.color = "red";
	// Redraw Space Station Data
	if (spacestatCount != 1)
		SPACESTAT_VALUE.textContent = `${spacestatCount} space stations`;
	else
		SPACESTAT_VALUE.textContent = `${spacestatCount} space station`;
	SPACESTAT_BUY.innerHTML = `${getSpaceStatCost()}<img src="img/basicEgg.png" width="16px" height="16px">`;
	if (getSpaceStatCost() <= eggs)
		SPACESTAT_BUY.style.color = "green";
	else
		SPACESTAT_BUY.style.color = "red";
	// Redraw Tech Data
	if (getTech(selectedTech).cost === "")
		TECH_COST.textContent = "";
	else
		TECH_COST.textContent = `Cost: ${getTech(selectedTech).cost} research`;
	TECH_DESCRIPTION.textContent = getTech(selectedTech).description;
	TECH_IMG.src = getTech(selectedTech).image;
	if (getTech(selectedTech).cost <= research && getTech(selectedTech).cost != "")
		TECH_PURCHASE.style.color = "green";
	else
		TECH_PURCHASE.style.color = "red";
	TECH_VALUE.textContent = "Research: " + Math.round(research) + " / " + calcMaxR();
	// Redraw Upgrade Data
	if (selectedUpgrade === "")
		UPGRADE_COST.textContent = "";
	else
		UPGRADE_COST.innerHTML = `${getUpgrade(selectedUpgrade).cost}<img src="img/basicEgg.png" width="24px" height="24px">`;
	if (getUpgrade(selectedUpgrade).cost <= eggs && getUpgrade(selectedUpgrade).cost != "")
		UPGRADE_PURCHASE.style.color = "green";
	else
		UPGRADE_PURCHASE.style.color = "red";
	UPGRADE_DESCRIPTION.textContent = getUpgrade(selectedUpgrade).description;
	UPGRADE_IMG.src = getUpgrade(selectedUpgrade).image;
	// Redraw Paradise Data
	if (paradiseBird === "")
		PARADISE_IMG.src = "img/none.png";
	else
		PARADISE_IMG.src = getParadiseBird(paradiseBird).bird;
	switch (paradisePhase) {
		case "waiting":
			PARADISE_INFO.innerHTML = `The nest is empty.<br>Another paradise bird will arrive in ${toDHMS(paradiseCounter)}.`;
			break;
		case "nested":
			PARADISE_INFO.innerHTML = `A ${getParadiseBird(paradiseBird).name} is here!<br>${getParadiseBird(paradiseBird).description}<br>It will finish laying an egg in ${toDHMS(paradiseCounter)}.`;
			break;
	}
	PARADISE_VALUE.innerHTML = `${paradiseEggs}<img src="${getParadiseBird(paradiseBird).egg}" width="48px" height="48px">`;
	// Redraw Mission Data
	if (selectedMission !== "") {
		MISSION_BAR.style.width = Math.round(100 * missionProgress / missionRequired) + "%";
		MISSION_BAR.textContent = Math.round(100 * missionProgress / missionRequired) + "%";
	}
	else {
		MISSION_BAR.style.width = "0%";
		MISSION_BAR.textContent = "0%";
	}
	MISSION_DESCRIPTION.textContent = getMission(selectedMission).description;
	switch (selectedMission) {
		case "Ancient Texts":
			missionProgress = starshipCount;
			break;
		case "Pull the Strings":
			missionProgress = supplyCount;
			break;
		case "Genetic Engineering":
			missionProgress = spacestatCount;
			break;
	}
	// Resize depending on window size
	BIGEGG.style.width = `${window.innerWidth / 4}px`;
	for (var i = 0; i < HORIZ_BARS.length; i++)
		HORIZ_BARS[i].style.width = `${window.innerWidth - 20}px`;
	for (var i = 0; i < VERTI_BARS.length; i++)
		VERTI_BARS[i].style.height = `${window.innerHeight - 60}px`;
	LEFT_DIV.style.height = `${window.innerHeight - 60}px`;
	CENTER_DIV.style.height = `${window.innerHeight - 60}px`;
	RIGHT_DIV.style.height = `${window.innerHeight - 60}px`;
}

/*	|--------------------|
	| handleMilestones() |
	|--------------------|*/

function handleMilestones() {
	//unlockBird
	if (! milestones.includes("unlockBird") && totalEggs >= 5) {
		milestones.push("unlockBird");
		toggleElement("bird_section");
	}
	//unlockTech
	if (! milestones.includes("unlockTech") && totalEggs >= 100) {
		milestones.push("unlockTech");
		toggleElement("tech");
	}
	//unlockArborHeist
	if (! milestones.includes("unlockArborHeist") && techUnlocked.includes("Illegal Fracking") && techUnlocked.includes("Mission Plans") && techUnlocked.includes("Criminality")) {
		milestones.push("unlockArborHeist");
		addTech(getTech("Arboretum Heist"));
	}
	//unlockGovtTakeover
	if (! milestones.includes("unlockGovtTakeover") && techUnlocked.includes("ETN (Egg Trade Network)") && techUnlocked.includes("Mission Plans") && techUnlocked.includes("Globalization")) {
		milestones.push("unlockGovtTakeover");
		addTech(getTech("Government Takeover"));
	}
	//unlockGeneticEngi
	if (! milestones.includes("unlockGeneticEngi") && techUnlocked.includes("Biodiversity") && techUnlocked.includes("Mission Plans") && techUnlocked.includes("Scientific Revolution")) {
		milestones.push("unlockGeneticEngi");
		addTech(getTech("Genetic Engineering"));
	}
	//unlockAncientTexts
	if (! milestones.includes("unlockAncientTexts") && techUnlocked.includes("Ancient Recipe Book") && techUnlocked.includes("Mission Plans") && techUnlocked.includes("Fanatical Religion")) {
		milestones.push("unlockAncientTexts");
		addTech(getTech("Ancient Texts"));
	}
	//buyOrigin
	if (! milestones.includes("buyOrigin") && techUnlocked.includes("Origin")) {
		milestones.push("buyOrigin");
		addUpgrade(getUpgrade("Eggcellent Goals"));
		toggleElement("upgrades");
		addTech(getTech("Farming"));
		addTech(getTech("Mission Plans"));
	}
	//buyBiodiversity
	if (! milestones.includes("buyBiodiversity") && techUnlocked.includes("Biodiversity")) {
		milestones.push("buyBiodiversity");
		addUpgrade(getUpgrade("Duck Eggs"));
		addUpgrade(getUpgrade("Robin Eggs"));
		addUpgrade(getUpgrade("Turkey Eggs"));
	}
	//buyAncientRecipe
	if (! milestones.includes("buyAncientRecipe") && techUnlocked.includes("Ancient Recipe Book")) {
		milestones.push("buyAncientRecipe");
		addUpgrade(getUpgrade("Egg Salad"));
		addUpgrade(getUpgrade("Deviled Eggs"));
		addUpgrade(getUpgrade("Egg Noodles"));
	}
	//buyRareMetals
	if (! milestones.includes("buyRareMetals") && techUnlocked.includes("Rare Metals")) {
		milestones.push("buyRareMetals");
		addUpgrade(getUpgrade("Promethium Capacitors"));
		addUpgrade(getUpgrade("Erbium Resistors"));
		addUpgrade(getUpgrade("Yttrium Transistors"));
	}
	//buyETN
	if (! milestones.includes("buyETN") && techUnlocked.includes("ETN (Egg Trade Network)")) {
		milestones.push("buyETN");
		addUpgrade(getUpgrade("Ostrich Eggs"));
		addUpgrade(getUpgrade("Eagle Eggs"));
		addUpgrade(getUpgrade("Parrot Eggs"));
	}
	//buyGlimpseParadise
	if (! milestones.includes("buyGlimpseParadise") && techUnlocked.includes("Glimpse of Paradise")) {
		milestones.push("buyGlimpseParadise");
		toggleElement("paradise_data");
		paradisePhase = "begin";
	}
	//buyIllegalFracking
	if (! milestones.includes("buyIllegalFracking") && techUnlocked.includes("Illegal Fracking")) {
		milestones.push("buyIllegalFracking");
		addUpgrade(getUpgrade("Compressed Yolk"));
		addUpgrade(getUpgrade("Custard Fracking"));
	}
	//buyCriminality
	if (! milestones.includes("buyCriminality") && techUnlocked.includes("Criminality")) {
		milestones.push("buyCriminality");
		removeTech("Globalization");
	}
	//buyGlobalization
	if (! milestones.includes("buyGlobalization") && techUnlocked.includes("Globalization")) {
		milestones.push("buyGlobalization");
		removeTech("Criminality");
	}
	//buyScientificRev
	if (! milestones.includes("buyScientificRev") && techUnlocked.includes("Scientific Revolution")) {
		milestones.push("buyScientificRev");
		removeTech("Fanatical Religion");
	}
	//buyFanaticalReli
	if (! milestones.includes("buyFanaticalReli") && techUnlocked.includes("Fanatical Religion")) {
		milestones.push("buyFanaticalReli");
		removeTech("Scientific Revolution");
	}
	//buyMissionPlans
	if (! milestones.includes("buyMissionPlans") && techUnlocked.includes("Mission Plans")) {
		milestones.push("buyMissionPlans");
		toggleElement("missions");
		addTech(getTech("Path of Enlightenment"));
	}
	//buyFarming
	if (! milestones.includes("buyFarming") && techUnlocked.includes("Farming")) {
		milestones.push("buyFarming");
		toggleElement("farmer_section");
		addTech(getTech("Biodiversity"));
		addTech(getTech("Sliced Bread"));
	}
	//buySlicedBread
	if (! milestones.includes("buySlicedBread") && techUnlocked.includes("Sliced Bread")) {
		milestones.push("buySlicedBread");
		toggleElement("bakery_section");
		addTech(getTech("Shipbuilding"));
		addTech(getTech("Ancient Recipe Book"));
	}
	//buyShipbuilding
	if (! milestones.includes("buyShipbuilding") && techUnlocked.includes("Shipbuilding")) {
		milestones.push("buyShipbuilding");
		toggleElement("boat_section");
		addTech(getTech("Mining"));
		addTech(getTech("ETN (Egg Trade Network)"));
	}
	//buyMining
	if (! milestones.includes("buyMining") && techUnlocked.includes("Mining")) {
		milestones.push("buyMining");
		toggleElement("mine_section");
		addTech(getTech("Solid Pumping"));
		addTech(getTech("Rare Metals"));
	}
	//buySolidPumping
	if (! milestones.includes("buySolidPumping") && techUnlocked.includes("Solid Pumping")) {
		milestones.push("buySolidPumping");
		toggleElement("well_section");
		addTech(getTech("Illegal Fracking"));
		addTech(getTech("Industry"));
	}
	//buyIndustry
	if (! milestones.includes("buyIndustry") && techUnlocked.includes("Industry")) {
		milestones.push("buyIndustry");
		toggleElement("factory_section");
		addTech(getTech("Egg Agendas"));
		addTech(getTech("Criminality"));
		addTech(getTech("Globalization"));
	}
	//buyEggAgendas
	if (! milestones.includes("buyEggAgendas") && techUnlocked.includes("Egg Agendas")) {
		milestones.push("buyEggAgendas");
		toggleElement("supply_section");
		addTech(getTech("Glimpse of Paradise"));
		addTech(getTech("Interstellar Drive"));
	}
	//buyInterstellarDrive
	if (! milestones.includes("buyInterstellarDrive") && techUnlocked.includes("Interstellar Drive")) {
		milestones.push("buyInterstellarDrive");
		toggleElement("starship_section");
		addTech(getTech("Stellar Hubs"));
		addTech(getTech("Scientific Revolution"));
		addTech(getTech("Fanatical Religion"));
	}
	//buyStellarHubs
	if (! milestones.includes("buyStellarHubs") && techUnlocked.includes("Stellar Hubs")) {
		milestones.push("buyStellarHubs");
		toggleElement("spacestat_section");
	}
	//buyArborHeist
	if (! milestones.includes("buyArborHeist") && techUnlocked.includes("Arboretum Heist")) {
		milestones.push("buyArborHeist");
		addMission(getMission("Arboretum Heist"));
	}
	//buyGeneticEngi
	if (! milestones.includes("buyGeneticEngi") && techUnlocked.includes("Genetic Engineering")) {
		milestones.push("buyGeneticEngi");
		addMission(getMission("Genetic Engineering"));
	}
	//buyAncientTexts
	if (! milestones.includes("buyAncientTexts") && techUnlocked.includes("Ancient Texts")) {
		milestones.push("buyAncientTexts");
		addMission(getMission("Ancient Texts"));
	}
	//buyPathEnlightenment
	if (! milestones.includes("buyPathEnlightenment") && techUnlocked.includes("Path of Enlightenment")) {
		milestones.push("buyPathEnlightenment");
		addMission(getMission("Path of Enlightenment"));
	}
	//buyGovtTakeover
	if (! milestones.includes("buyGovtTakeover") && techUnlocked.includes("Government Takeover")) {
		milestones.push("buyGovtTakeover");
		addMission(getMission("Government Takeover"));
	}
	//finishArborHeist
	if (! milestones.includes("finishArborHeist") && selectedMission === "Arboretum Heist" &&  missionProgress >= missionRequired) {
		milestones.push("finishArborHeist");
		addUpgrade(getUpgrade("Stolen Waterfall Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Hide the Evidence"));
	}
	//finishHideEvidence
	if (! milestones.includes("finishHideEvidence") && selectedMission === "Hide the Evidence" &&  missionProgress >= missionRequired) {
		milestones.push("finishHideEvidence");
		addUpgrade(getUpgrade("Stolen Reef Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Make the Escape"));
	}
	//finishMakeEscape
	if (! milestones.includes("finishMakeEscape") && selectedMission === "Make the Escape" &&  missionProgress >= missionRequired) {
		milestones.push("finishMakeEscape");
		addUpgrade(getUpgrade("Stolen Oasis Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		if (MISSION_SELECTOR.selectedOptions.length === 0) {
			selectedMission = "";
			missionProgress = 0;
			missionRequired = "";
		}	
		else {
			selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
			missionProgress = 0;
			missionRequired = getMission(selectedMission).required;
		}
	}
	//finishGovtTakeover
	if (! milestones.includes("finishGovtTakeover") && selectedMission === "Government Takeover" &&  missionProgress >= missionRequired) {
		milestones.push("finishGovtTakeover");
		addUpgrade(getUpgrade("Necessary Corruption"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Bribe Officials"));
	}
	//finishBribeOfficial
	if (! milestones.includes("finishBribeOfficial") && selectedMission === "Bribe Officials" &&  missionProgress >= missionRequired) {
		milestones.push("finishBribeOfficial");
		addUpgrade(getUpgrade("Manipulate the Market"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Pull the Strings"));
	}
	//finishPullStrings
	if (! milestones.includes("finishPullStrings") && selectedMission === "Pull the Strings" &&  missionProgress >= missionRequired) {
		milestones.push("finishPullStrings");
		addUpgrade(getUpgrade("Illegal Assets"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		if (MISSION_SELECTOR.selectedOptions.length === 0) {
			selectedMission = "";
			missionProgress = 0;
			missionRequired = "";
		}	
		else {
			selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
			missionProgress = 0;
			missionRequired = getMission(selectedMission).required;
		}
	}
	//finishGeneticEngineering
	if (! milestones.includes("finishGeneticEngineering") && selectedMission === "Genetic Engineering" &&  missionProgress >= missionRequired) {
		milestones.push("finishGeneticEngineering");
		addUpgrade(getUpgrade("Cambrian Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Remap the Genome"));
	}
	//finishRemapGenome
	if (! milestones.includes("finishRemapGenome") && selectedMission === "Remap the Genome" &&  missionProgress >= missionRequired) {
		milestones.push("finishRemapGenome");
		addUpgrade(getUpgrade("Chronozone Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Ideal Beings"));
	}
	//finishIdealBeings
	if (! milestones.includes("finishIdealBeings") && selectedMission === "Ideal Beings" &&  missionProgress >= missionRequired) {
		milestones.push("finishIdealBeings");
		addUpgrade(getUpgrade("Cenozoic Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		if (MISSION_SELECTOR.selectedOptions.length === 0) {
			selectedMission = "";
			missionProgress = 0;
			missionRequired = "";
		}	
		else {
			selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
			missionProgress = 0;
			missionRequired = getMission(selectedMission).required;
		}
	}
	//finishAncientTexts
	if (! milestones.includes("finishArborHeist") && selectedMission === "Ancient Texts" &&  missionProgress >= missionRequired) {
		milestones.push("finishArborHeist");
		addUpgrade(getUpgrade("Exotic Omelette"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Contact the Ancients"));
	}
	//finishContactAncients
	if (! milestones.includes("finishContactAncients") && selectedMission === "Contact the Ancients" &&  missionProgress >= missionRequired) {
		milestones.push("finishContactAncients");
		addUpgrade(getUpgrade("Seven-dimensional Egg"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		addMission(getMission("Discover the Monolith"));
	}
	//finishDiscoverMonolith
	if (! milestones.includes("finishDiscoverMonolith") && selectedMission === "Discover the Monolith" &&  missionProgress >= missionRequired) {
		milestones.push("finishDiscoverMonolith");
		addUpgrade(getUpgrade("Portal to the Ancients"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		if (MISSION_SELECTOR.selectedOptions.length === 0) {
			selectedMission = "";
			missionProgress = 0;
			missionRequired = "";
		}	
		else {
			selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
			missionProgress = 0;
			missionRequired = getMission(selectedMission).required;
		}
	}
	//finishPathEnlightenment
	if (! milestones.includes("finishPathEnlightenment") && selectedMission === "Path of Enlightenment" &&  missionProgress >= missionRequired) {
		milestones.push("finishPathEnlightenment");
		addUpgrade(getUpgrade("Pure Yolk"));
		MISSION_SELECTOR.remove(MISSION_SELECTOR.selectedIndex);
		if (MISSION_SELECTOR.selectedOptions.length === 0) {
			selectedMission = "";
			missionProgress = 0;
			missionRequired = "";
		}	
		else {
			selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
			missionProgress = 0;
			missionRequired = getMission(selectedMission).required;
		}
	}
}

/*	|------------------|
	| handleParadise() |
	|------------------|*/

function handleParadise() {
	if (paradisePhase === "begin") {
		paradisePhase = "waiting";
		paradiseCounter = 28800 / 100;
	}
	else if (paradisePhase === "waiting" && paradiseCounter <= 0) {
		var magicArray = [5,5,5,5,5,5]
		
		for (var i = 0; i < magicArray.length; i++)
			magicArray[i] *= calcUpgradeEffect("pma");
		
		var rand = Math.random() * 100;
		
		for (var i = 0; i < magicArray.length; i++) {
			rand -= magicArray[i];
			if (rand <= 0) {
				paradiseBird = paradiseGen[i];
				break;
			}
		}
		if (paradiseBird === "")
			paradiseBird = "Bird";
		paradisePhase = "nested"
		paradiseCounter = getParadiseBird(paradiseBird).duration;
	}
	else if (paradisePhase === "nested" && paradiseCounter <= 0) {
		var production = getRndInteger(getParadiseBird(paradiseBird).produceMin, getParadiseBird(paradiseBird).produceMax);
		paradiseEggs += production;
		paradiseCounter = 28800;
		paradiseBird = "";
		paradisePhase = "waiting";
	}
}

/*	|------------------|
	| handleAutosave() |
	|------------------|*/

function handleAutosave() {
	setCookie("eggs", eggs.toString(), 1);
	eggs += 1;
	if (getCookie("eggs") != "")
		window.alert(getCookie("eggs"));
}

/*	|---------------|
	| toggleElement |
	|---------------|*/

function toggleElement(imp) {
  var x = document.getElementById(imp);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleFreeze() {
	if (listFreeze)
		listFreeze = false;
	else
		listFreeze = true;
}


/*	|------------------|
	| USEFUL FUNCTIONS |
	|------------------|*/

function toDHMS(num) {
	var seconds = num;
	var days = Math.floor(seconds / 86400);
	seconds -= days * 86400;
	var hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;
	var minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;
	var value = ""
	if (days === 1)
		value += "1 day ";
	else if (days > 1)
		value += `${days} days, `;
	if (hours === 1)
		value += "1 hour ";
	else if (hours > 1)
		value += `${hours} hours, `;
	if (minutes === 1)
		value += "1 minute ";
	else if (minutes > 1)
		value += `${minutes} minutes, `;
	if (seconds === 1)
		value += "1 second ";
	else if (seconds > 1)
		value += `${seconds} seconds, `;
	return value.substring(0, value.length - 2);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if (user != "" && user != null) {
			setCookie("username", user, 365);
		}
	}
}

function loadSave() {
	if (getCookie("eggs") != "")
		eggs = parseInt(getCookie("eggs"));
}

/*	|-----------------|
	| EVENT FUNCTIONS |
	|-----------------|*/

function addClick() {
	var value = calcClick() * gameSpeed;
	eggs += value;
	totalEggs += value;
	if (selectedMission === "Arboretum Heist" || selectedMission === "Government Takeover" || selectedMission === "Discover the Monolith" || selectedMission === "Ideal Beings") missionProgress += 1;
	if (selectedMission === "Hide the Evidence" || selectedMission === "Contact the Ancients" || selectedMission === "Remap the Genome") missionProgress += value;
}

function addSecond() {
	var value = calcEPS() * gameSpeed;
	eggs += value;
	totalEggs += value;
	if (selectedMission === "Hide the Evidence") missionProgress += value;
	if (selectedMission === "Path of Enlightenment") missionProgress += calcBirdEPS();
	research += calcRPS() * gameSpeed;
	if (research > calcMaxR())
		research = calcMaxR();
	if (paradisePhase != "")
		paradiseCounter -= 1 * gameSpeed;
}

/*	|-----------------------|
	| Calculation Functions |
	|-----------------------|*/

function calcEPS() {
	var value = 0;
	
	value += calcBirdEPS();
	
	value += calcFarmerEPS();
	
	value += calcBakeryEPS();
	
	value += calcBoatEPS();
	
	value += calcMineEPS();
	
	value += calcWellEPS();
	
	value += calcFactoryEPS();
	
	value += calcSupplyEPS();
	
	value += calcStarshipEPS();
	
	value += calcSpaceStatEPS();
	
	value *= calcUpgradeEffect("eps");
	
	if (upgradePurchased("Turkey Eggs"))
		value *= 1 + 0.01 * (Math.floor(farmerCount / 10));
	if (upgradePurchased("Manipulate the Market"))
		value *= 1 + 0.01 * (supplyCount);
	if (paradiseBird === "Bird")
		value *= 1.05;
	if (paradiseBird === "Pheonix")
		value *= 1 + 0.01 * (factoryCount);
	if (paradiseBird === "Nebula Eagle" || paradiseBird === "Birds of Paradise")
		value *= 1.07;
	if (paradiseBird === "Roc")
		value *= 1.1;
	if (paradiseBird === "Sea Serpent")
		value *= 1.08;
	if (paradiseBird === "Zaratan")
		value *= 1.06;
	
	return value;
}

function calcUpgradeEffect(effect) {
	var multiplier = 1;
	
	for (var i = 0; i < upgradesUnlocked.length; i++) {
		for (var v = 0; v < upgradesUnlocked[i].effects.length; v++) {
			if (upgradesUnlocked[i].effects[v].substring(0,3) === effect) {
				multiplier += Number.parseInt(upgradesUnlocked[i].effects[v].substring(3), 10) / 100;
			}
		}
	}
	
	return multiplier;
}

function calcRPS() {
	var value = 1;
	
	value *= calcUpgradeEffect("rgn");
	
	return value;
}

function calcMaxR() {
	var value = 500;
	
	value *= calcUpgradeEffect("rmx");
	
	return value;
}	

function calcClick() {
	var value = 1;
	
	value *= calcUpgradeEffect("mse");
	
	if (paradiseBird === "Roc")
		value *= 2;
	
	return value;
}

function calcBirdEPS() {
	var value = 0;
	
	value += birdCount * 0.1;
	
	value *= calcUpgradeEffect("brd");
	
	if (paradiseBird === "Birds of Paradise")
		value *= 10;
	
	return value;
}

function calcFarmerEPS() {
	var value = 0;
	
	value += farmerCount * 1;
	
	value *= calcUpgradeEffect("frm");
	
	if (paradiseBird === "Birds of Paradise")
		value *= 10;
	
	return value;
}

function calcBakeryEPS() {
	var value = 0;
	
	value += bakeryCount * 8;
	
	value *= calcUpgradeEffect("bak");
	
	return value;
}

function calcBoatEPS() {
	var value = 0;
	
	value += boatCount * 80;
	
	value *= calcUpgradeEffect("bot");
	
	if (paradiseBird === "Sea Serpent")
		value *= 2;
	
	return value;
}

function calcMineEPS() {
	var value = 0;
	
	value += mineCount * 320;
	
	value *= calcUpgradeEffect("min");
	
	if (upgradePurchased("Erbium Resistors"))
		value *= 1 + 0.01 * (Math.floor(research / 10));
	
	if (paradiseBird === "Zaratan")
		value *= 2;
	
	return value;
}

function calcWellEPS() {
	var value = 0;
	
	value += wellCount * 2350;
	
	value *= calcUpgradeEffect("wel");
	
	if (upgradePurchased("Compressed Yolk")) {
		var compression = 0;
		for (var i = 0; i < upgradesUnlocked.length; i++) {
			if (upgradesUnlocked[i].features.includes("egg"))
				compression += 1;
		}
		value *= 1 + 0.05 * compression;
	}
	
	if (paradiseBird === "Zaratan")
		value *= 2;
	
	return value;
}

function calcFactoryEPS() {
	var value = 0;
	
	value += factoryCount * 11000;
	
	value *= calcUpgradeEffect("fac");
	
	if (paradiseBird === "Pheonix")
		value *= 2;
	
	return value;
}

function calcSupplyEPS() {
	var value = 0;
	
	value += supplyCount * 75000;
	
	value *= calcUpgradeEffect("sup");
	
	if (paradiseBird === "Sea Serpent")
		value *= 2;
	
	return value;
}

function calcStarshipEPS() {
	var value = 0;
	
	value += starshipCount * 274000;
	
	value *= calcUpgradeEffect("str");
	
	if (paradiseBird === "Nebula Eagle")
		value *= 2;
	
	return value;
}

function calcSpaceStatEPS() {
	var value = 0;
	
	value += spacestatCount * 990,000;
	
	value *= calcUpgradeEffect("spa");
	
	if (paradiseBird === "Nebula Eagle")
		value *= 2;
	
	return value;
}

/*	|----------------|
	| COST FUNCTIONS |
	|----------------|*/

function getBirdCost() {
	return Math.round(5 * Math.pow(1.2, birdCount));
}

function getFarmerCost() {
	return Math.round(100 * Math.pow(1.2, farmerCount));
}

function getBakeryCost() {
	return Math.round(1050 * Math.pow(1.2, bakeryCount));
}

function getBoatCost() {
	return Math.round(20000 * Math.pow(1.2, boatCount));
}

function getMineCost() {
	return Math.round(150000 * Math.pow(1.2, mineCount));
}

function getWellCost() {
	return Math.round(2350000 * Math.pow(1.2, wellCount));
}

function getFactoryCost() {
	return Math.round(65000000 * Math.pow(1.2, factoryCount));
}

function getSupplyCost() {
	return Math.round(754000000 * Math.pow(1.2, supplyCount));
}

function getStarshipCost() {
	return Math.round(6850000000 * Math.pow(1.2, starshipCount));
}

function getSpaceStatCost() {
	return Math.round(98500000000 * Math.pow(1.2, spacestatCount));
}

/*	|----------------|
	| TECH FUNCTIONS |
	|----------------|*/

function getTech(nam) {
	for (var i = 0; i < techData.length; i++)
		if (techData[i].name === nam)
			return techData[i];
}

function addTech(technology) {
	TECH_SELECTOR.options.add( new Option(technology.name, technology.name, technology.selected) );
	selectedTech = TECH_SELECTOR.selectedOptions[0].value;
}

function removeTech(tech) {
	for (var i = 0; i < TECH_SELECTOR.options.length; i++)
		if (TECH_SELECTOR.options[i].value === tech)
			TECH_SELECTOR.remove(i);
	redrawValues();
	if (TECH_SELECTOR.options.length === 0)
		selectedTech = "";
	else
		selectedTech = TECH_SELECTOR.options[0].value;
}

/*	|-------------------|
	| UPGRADE FUNCTIONS |
	|-------------------|*/

function getUpgrade(nam) {
	for (var i = 0; i < upgradeData.length; i++)
		if (upgradeData[i].name === nam)
			return upgradeData[i];
}

function addUpgrade(upgrade) {
	UPGRADE_SELECTOR.options.add( new Option(upgrade.name, upgrade.name, upgrade.selected) );
	selectedUpgrade = UPGRADE_SELECTOR.selectedOptions[0].value;
}

function upgradePurchased(upgradeName) {
	for (var i = 0; i < upgradesUnlocked.length; i++) {
		if (upgradesUnlocked[i].name === upgradeName)
			return true;
	}
	return false;
}

/*	|-------------------|
	| MISSION FUNCTIONS |
	|-------------------|*/

function getMission(nam) {
	for (var i = 0; i < missionData.length; i++)
		if (missionData[i].name === nam)
			return missionData[i];
}

function addMission(mission) {
	MISSION_SELECTOR.options.add( new Option(mission.name, mission.name, mission.selected) );
	if (MISSION_SELECTOR.options.length === 1) {
		selectedMission = MISSION_SELECTOR.selectedOptions[0].value;
		missionProgress = 0;
		missionRequired = mission.required;
	}
}

/*	|--------------------|
	| PARADISE FUNCTIONS |
	|--------------------|*/

function getParadiseBird(nam) {
	for (var i = 0; i < paradiseData.length; i++)
		if (paradiseData[i].name === nam)
			return paradiseData[i];
}


/*	|--------------------|
	| PURCHASE FUNCTIONS |
	|--------------------|*/

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

function purchaseBakery() {
	if (eggs >= getBakeryCost()) {
		eggs -= getBakeryCost();
		bakeryCount++;
	}
}

function purchaseBoat() {
	if (eggs >= getBoatCost()) {
		eggs -= getBoatCost();
		boatCount++;
	}
}

function purchaseMine() {
	if (eggs >= getMineCost()) {
		eggs -= getMineCost();
		mineCount++;
	}
}

function purchaseWell() {
	if (eggs >= getWellCost()) {
		eggs -= getWellCost();
		wellCount++;
	}
}

function purchaseFactory() {
	if (eggs >= getFactoryCost()) {
		eggs -= getFactoryCost();
		factoryCount++;
	}
}

function purchaseSupply() {
	if (eggs >= getSupplyCost()) {
		eggs -= getSupplyCost();
		supplyCount++;
	}
}

function purchaseStarship() {
	if (eggs >= getStarshipCost()) {
		eggs -= getStarshipCost();
		starshipCount++;
	}
}

function purchaseSpaceStat() {
	if (eggs >= getSpaceStatCost()) {
		eggs -= getSpaceStatCost();
		spacestatCount++;
	}
}

/*	|-----------------|
	| EVENT LISTENERS |
	|-----------------|*/

BIGEGG.addEventListener("click", addClick, false);

BIRD_BUY.addEventListener("click", purchaseBird, false);

FARMER_BUY.addEventListener("click", purchaseFarmer, false);

BAKERY_BUY.addEventListener("click", purchaseBakery, false);

BOAT_BUY.addEventListener("click", purchaseBoat, false);

MINE_BUY.addEventListener("click", purchaseMine, false);

WELL_BUY.addEventListener("click", purchaseWell, false);

FACTORY_BUY.addEventListener("click", purchaseFactory, false);

SUPPLY_BUY.addEventListener("click", purchaseSupply, false);

STARSHIP_BUY.addEventListener("click", purchaseStarship, false);

SPACESTAT_BUY.addEventListener("click", purchaseSpaceStat, false);

TECH_SELECTOR.addEventListener('change', (event) => {
	selectedTech = event.target.value;
});

TECH_PURCHASE.addEventListener("click", function(){
	if (listFreeze)
		return;
	toggleFreeze();
	if (research >= getTech(selectedTech).cost) {
		research -= getTech(selectedTech).cost;
		techUnlocked.push(getTech(selectedTech).name);
		TECH_SELECTOR.remove(TECH_SELECTOR.selectedIndex);
		if (TECH_SELECTOR.selectedOptions.length === 0)
			selectedTech = "";
		else
			selectedTech = TECH_SELECTOR.selectedOptions[0].value;
	}
	setTimeout(toggleFreeze, 500);
}, false);

UPGRADE_SELECTOR.addEventListener('change', (event) => {
	selectedUpgrade = event.target.value;
});

UPGRADE_PURCHASE.addEventListener("click", function(){
	if (listFreeze)
		return;
	if (eggs >= getUpgrade(selectedUpgrade).cost) {
		eggs -= getUpgrade(selectedUpgrade).cost;
		upgradesUnlocked.push(getUpgrade(selectedUpgrade));
		UPGRADE_SELECTOR.remove(UPGRADE_SELECTOR.selectedIndex);
		if (UPGRADE_SELECTOR.selectedOptions.length === 0)
			selectedUpgrade = "";
		else
			selectedUpgrade = UPGRADE_SELECTOR.selectedOptions[0].value;
	}
}, false);

MISSION_SELECTOR.addEventListener('change', (event) => {
	selectedMission = event.target.value;
	missionProgress = 0;
	missionRequired = getMission(selectedMission).required;
});

function startGame() {
	toggleElement("bird_section");

	toggleElement("farmer_section");

	toggleElement("bakery_section");

	toggleElement("boat_section");

	toggleElement("mine_section");

	toggleElement("well_section");

	toggleElement("factory_section");

	toggleElement("supply_section");

	toggleElement("starship_section");

	toggleElement("spacestat_section");

	toggleElement("upgrades");

	toggleElement("tech");

	toggleElement("missions");
	
	toggleElement("paradise_data");
	
	addTech(getTech("Origin"));
	
	loadSave();
	
	if (getCookie("eggs") != "")
		window.alert(getCookie("eggs"));
}

var repeatEPS = setInterval(addSecond,1000);

var repeatRedraw = setInterval(redrawValues,1);

var repeatMilestones = setInterval(handleMilestones,1000);

var repeatParadise = setInterval(handleParadise,1000);

var repeatAutosave = setInterval(handleAutosave,30000);

startGame()		
