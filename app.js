// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact, image) {
    this.species = species;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
};

// Create Dino Objects
const tracy = new Dinosaur("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh", "Documents/dinosaur-project1/images/triceratops.png");
const trex = new Dinosaur("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long." );
const anklyo = new Dinosaur("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
const brachio = new Dinosaur("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
const stego = new Dinosaur("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia","Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
const elasmo = new Dinosaur("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
const pter = new Dinosaur("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
const pigeon = new Dinosaur("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");

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
    humanName = document.getElementById("name").value;
    humanWeight = document.getElementById("weight]").value;
    humanHeight = document.getElementById("feet").value;
    humanInches = document.getElementById("inches").value;
    humanName = document.getElementById("name").value;
    humanDiet = document.getElementById("diet").value;
    humanImage = "/images/human.png"

    const human = new Human(humanName, humanWeight, humanHeight, humanInches, humanDiet, humanImage)
    const april = new Human("April", 150, 5, 6, "herbavore", humanImage)
    return human
    return april
}(getHumanData());

console.log(getHumanData())

//TO DO: turn on button to click and save data getHumanData()

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
