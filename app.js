//TO DO: 
// Get dino Array working to render tiles
//Compare methods (3)
//Randomize facts shown

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
};

// Fetch JSON
fetch('dino.json')
    .then(response => response.json())
    .then(data => {getDinoArray(data.Dinos)})
    .catch(function() {
        console.log('An error occurred')
    })

// Create Dino Objects
function getDinoArray(dinos) {
    dinoArray = [];
    dinos.forEach((dino) => {
        newDino = new Dinosaur(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact);
            dinoArray.push(newDino)
    });
    console.log(dinoArray)
    return dinoArray
}

// Create Human Object
function Human(humanName, humanWeight, humanFeet, humanInches, humanDiet) {
    this.name = humanName;
    this.weight = humanWeight;
    this.feet = humanFeet;
    this.inches = humanInches;
    this.diet = humanDiet;
};

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
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(){
    let weightDifference = this.weight - human.weighteight;
    if (weightDifference > 0) {
        message = `<p>You weigh ${weightDifference} lbs less than ${this.species}!</p>`
    } else if (weightDifference === 0) {
        message = `<p>You weigh the same as this dinosaur!</p>`
    } else (weightDifference < 0); {
        message = `<p>You weigh ${weightDifference} lbs more than ${this.species}</p>!`
    } return message
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(){
    let heightDifference = dinos.height - human.feet * 12
    if (heightDifference > 0) {
        message = `<p>You are ${heightDifference + (getHumanData()).humanInches} inches than ${this.species}!</p>`
    } else if (heightDifference = 0) {
        message = `<p>You are the same height as ${this.species}!`
    } else (heightDifference < 0); {
        message = `<p>You are ${heightDifference + getHumanData().humanInches} inches shorter than ${this.species}!</p>`
    } return message
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(){
    console.log(dinoArray, human)
    if(this.diet === human.diet) {
        message = `<p>You and ${this.species} have the same diet!</p>`
    } else {
        message = `<p>Your diet is different than ${this.species}</p>`
    } return message
};

//Generate human tile
function generateTiles(human) {
    let tile = document.createElement("div")
    tile.className = "grid-item"
    let userTile = document.createElement("h2")
    userTile.innerHTML = `${human.name}
        <img src="images/human.png" alt="human"/>
        ${human.diet}`
    tile.appendChild(userTile);

    document.getElementById("grid").appendChild(tile)
}

//Generate dino tiles
function generateDinoTiles(dinoArray) {
    for (let i = 0; i < 9; i++) {
        let dino = getDinoArray(dinoArray);
        let tile = document.createElement("div")
        tile.className = "grid-item"
        
        let dinoTile = document.createElement("h2");
        dinoTile.innerHTML = `${dino.species}
        <img src="${dino.imagePath}" alt="${dino.species}"/>
        ${dino.diet}`;

        tile.appendChild(dinoTile);
    }
    document.createElement("grid").appendChild(tile);
}

// Remove form from screen
function removehumanForm(){
    document.querySelector("#dino-compare").style.display = "none"
};


// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
        removehumanForm();
        generateTiles(getHumanData());
        generateDinoTiles(dinoArray);
        getHumanData();
        // getDinoArray();
        // compareDiet();
        // compareWeight();
        // compareHeight();
    });