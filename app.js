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

//add data to array
    // Get Dinosaur data from JSON
fetch('dino.json')
  .then(response => response.json())
  .then(data => console.log(data));

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
function displayTiles(){
    let tiles = document.querySelector('#grid')
    tiles.appendChild;
};

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
    displayTiles()
});