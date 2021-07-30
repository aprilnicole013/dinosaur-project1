// Create Dino Constructor
function Dinosaur(species, dinoWeight, dinoHeight, dinoDiet, where, when, fact, image) {
    this.species = species;
    this.weight = dinoWeight;
    this.height = dinoHeight;
    this.diet = dinoDiet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
};

// Create Dino Objects

// Get Dinosaur data from JSON
const dinojson = 'dino.json';

fetch(dinojson)
    .then(function(response) {
    return(response.json());
})
    .then(function(data){
    console.log(data)
    
})
    .catch(function() {
    console.log('An error occurred')
});

// Create Human Object
function Human(name, weight, height, inches, diet, image) {
    this.name = name;
    this.weight = weight; 
    this.height = height;
    this.inches = inches;
    this.diet = diet;
    this.image = "/images/human.png";
};

// Use IIFE to get human data from form

function getHumanData(){
    humanName = document.querySelector("#name").value;
    humanWeight = document.querySelector("#weight").value;
    humanHeight = document.querySelector("#feet").value;
    humanInches = document.querySelector("#inches").value;
    humanName = document.querySelector("#name").value;
    humanDiet = document.querySelector("#diet").value;
    humanImage = "/images/human.png"

    const human = new Human(humanName, humanWeight, humanHeight, humanInches, humanDiet, humanImage)
    return human
}(getHumanData());

let human = getHumanData()

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(){
    console.log(human);
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(){
    console.log(human);
};
    
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(){
    console.log(human);
    };
    
// Generate Tiles for each Dino in Array
function generateTiles(){
    //create a div for each tile
    let dinoTile = document.createElement("div")
    dinoTile.className = "grid-item"

    // Add tiles to DOM by adding test to inner text
    let apples = document.createElement("h2")
    apples.innerText = "Hello, my name is"

    dinoTile.appendChild(apples)

    document.getElementById("grid").appendChild(dinoTile)

    let orangesDiv = document.createElement("div")
    orangesDiv.className = "grid-item"
    
    let oranges = document.createElement("h2")
    oranges.innerText = "Oranges"

    orangesDiv.appendChild(oranges)
    //append new elelment to new div

    //create element on page
    document.getElementById("grid").appendChild(orangesDiv)

 };

// Remove form from screen
function removehumanForm(){
    document.querySelector("#dino-compare").style.display = "none"
}

// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
        removehumanForm();
        generateTiles();
        console.log(getHumanData());
});