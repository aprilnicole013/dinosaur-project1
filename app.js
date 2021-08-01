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
let dinos = [];

fetch('dino.json')
    .then(response => response.json())
    .then(data => dinos = data.Dinos.map(dino => new Dinosaur(dino.species, dino.dinoWeight, dino.dinoHeight, dino.dinoDiet, dino.where, dino.when, dino.fact, dino.image)))
    .catch(function() {
        console.log('An error occurred')
    })

console.log(dinos)

// Create Human Object
function Human(name, weight, height, inches, diet, image) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.inches = inches;
    this.diet = diet;
    this.image = "images/human.png"
};

let humanName = document.querySelector("#name");
let humanWeight = document.querySelector("#weight");
let humanHeight = document.querySelector("#feet");
let humanInches = document.querySelector("#inches");
let humanDiet = document.querySelector("#diet");
const humanImage = "images/human.png"

const userData = new Human(humanName.value, humanWeight.value, humanHeight.value, humanInches.value, humanDiet.value);

// Use IIFE to get human data from form



function getHumanData(){
    localStorage.setItem(humanName, humanName.value);
    localStorage.setItem(humanWeight, humanWeight.value);
    localStorage.setItem(humanHeight, humanHeight.value);
    localStorage.setItem(humanInches, humanInches.value);
    localStorage.setItem(humanDiet, humanDiet.value);
    const humanImage = "images/human.png"
}(getHumanData());

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
    let humanTile = document.createElement("div")
    humanTile.className = "grid-item"

    // Add tiles to DOM by adding test to inner text
    let userName = document.createElement("h2")
    userName.innerText = humanName.value;

    humanTile.appendChild(userName)

    document.getElementById("grid").appendChild(humanTile)

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
};

// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
        removehumanForm();
        generateTiles();
        getHumanData();
    });