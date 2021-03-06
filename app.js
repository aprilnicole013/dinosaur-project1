// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact, imagePath) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.imagePath = imagePath;
    // Create Dino Compare Method 1
    this.compareWeight = function (humanWeight) {
        let weightDifference = Math.abs(weight - Number(humanWeight));
        if (humanWeight < weight){
            return `You weigh ${weightDifference} lbs less than this dinosaur`;
        } else if (humanWeight > weight) {
            return `You weigh ${weightDifference} lbs more than this dinosaur`;
        } else {
            return `You weigh the same as this dinosaur!`
        }
    };
    // Create Dino Compare Method 2
    this.compareHeight = function (humanFeet, humanInches) {
        let humanHeight = Number(humanFeet * 12) + Number(humanInches)
        let heightDifference = Math.abs(height - humanHeight)
        if (humanHeight < height){
            return `You are ${heightDifference} inches shorter than this dinosaur`;
        } else if (humanHeight > height) {
            return `You are ${heightDifference} inches taller than this dinosaur`;
        } else {
            return `You and this dinosaur are the same height!`
        }
    };
    // Create Dino Compare Method 3
    this.compareDiet = function (humanDiet) {
        if (diet === humanDiet) {
            message = `You have the same diet as this dinosaur`
        }else {
            message = `Your diet is different than this dinosaur`
        }
        return message
    }
}

// Fetch JSON
fetch('dino.json')
    .then(response => response.json()) //get response from url
    .then(data => {  //get data
        getDinoArray(data.Dinos) //pass array of Dino objects into the getDinoArray function
    });

// Creating Dino Array from fetched data
function getDinoArray(dinos) {
    dinoArray = []
    dinos.forEach((dino) => {
    newDinoObj = new Dinosaur(
        dino.species,
        dino.weight,
        dino.height,
        dino.diet,
        dino.where,
        dino.when,
        dino.fact)
    dinoArray.push(newDinoObj)
    });
    return dinoArray
}

// Create Human Object
function Human(humanName, humanWeight, humanFeet, humanInches, humanDiet) {
    this.name = humanName;
    this.weight = humanWeight;
    this.feet = humanFeet;
    this.inches = humanInches;
    this.diet = humanDiet;
}

// Use IIFE to get human data from form
function getHumanData(){
    return (function() {
        let humanName = document.querySelector("#name").value;
        let humanWeight = document.querySelector("#weight").value;
        let humanFeet = document.querySelector("#feet").value;
        let humanInches = document.querySelector("#inches").value;
        let humanDiet = document.querySelector("#diet").value;
        let humanImage = "images/human.png"
        
        let human = new Human(humanName,humanWeight, humanFeet, humanInches, humanDiet, humanImage);
        return human
    })()
}

//Generate tiles
function generateTiles(dinosaurArray, human) {
    dinosaurArray.splice(4,0,human) // to insert human into array

    for (let i = 0; i < 9; i++) {
        let dino = dinosaurArray[i]
        let tile = document.createElement("div")
        tile.className = "grid-item"

        if(i === 4) {
            let userTile = document.createElement("h2")
            userTile.innerHTML = `<h2>${human.name}</h2>
            <img src="images/human.png" alt="human"/>`;
            
            tile.appendChild(userTile);
        } else if (i === 8) { // Pigeon tile
            let dinoTile = document.createElement("h2");
            dinoTile.innerHTML = `<h2>${dino.species}</h2>
            <img src="images/${dino.species.toLowerCase()}.png" alt="${dino.species}"/>
            <h4>${dino.fact}</h4>`;
        
            tile.appendChild(dinoTile);
        } else {
            //randomize facts
            const randomFact = Math.floor(Math.random() * 4)
            let jsonFact = dino.fact
            let dCW = dino.compareWeight(human.weight)
            let dCH = dino.compareHeight(human.feet, human.inches)
            let dCD = dino.compareDiet(human.diet)
            facts = [jsonFact, dCW, dCH, dCD]

            let dinoTile = document.createElement("h2");
            dinoTile.innerHTML = `<h2>${dino.species}</h2>
            <img src="images/${dino.species.toLowerCase()}.png" alt="${dino.species}"/>
            <h4>${facts[randomFact]}</h4>`;
            
            tile.appendChild(dinoTile);
        }
        document.querySelector("#grid").appendChild(tile);
    }
}

// Remove form from screen
function removehumanForm(){
    document.querySelector("#dino-compare").style.display = "none"
}


// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
        removehumanForm();
        generateTiles(dinoArray, getHumanData());
        getHumanData();
    });