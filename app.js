//TO DO: 
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
    // // Create Dino Compare Method 1
    // this.compareWeight = function (human) {
    //     let weightDifference = dino.weight - human.weight;
    //     console.log(weightDifference);
    // };
    // // Create Dino Compare Method 2
    // this.compareHeight = function (human) {
    //     let heightDifference = dinos.height - human.feet * 12
    //     console.log(heightDifference)
    // };
    // this.compareDiet = function (human) {
    //     console.log(dino.diet, human.diet)
    // }
}
// Fetch JSON
fetch('dino.json')
    .then(response => response.json()) //get response from url
    .then(data => {  //get data
        getDinoArray(data.Dinos) //pass array of Dino objects into the getDinoArray function
    })
    .catch(error => console.log(`There was a data fetch error: ${error}`));

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

//Generate tiles
function generateTiles(dinosaurArray, human) {
    dinosaurArray.splice(4,0,human) // to insert dino into array

    for (let i = 0; i < 9; i++) {
        let dino = dinosaurArray[i]
        console.log(dino.species)
        let tile = document.createElement("div")
        tile.className = "grid-item"

        if(i === 4) {
            let userTile = document.createElement("h2")
            userTile.innerHTML = `<h2>${human.name}</h2>
            <img src="images/human.png" alt="human"/>
            <h4>${human.diet.toLowerCase()}</h4>`;
            
            tile.appendChild(userTile);
        } else if (i === 8) {
            let dinoTile = document.createElement("h2");
            dinoTile.innerHTML = `<h2>${dino.species}</h2>
            <img src="images/${dino.species.toLowerCase()}.png" alt="${dino.species}"/>
            <h4>${dino.fact}</h4>`;
        
            tile.appendChild(dinoTile);
        } else {
            //randomize facts
            // const randomFact = Math.floor(Math.randon() * 4)
            // let jsonFact = dino.fact
            // let dCW = dino.compareWeight(human.weight)
            // let dCH = dino.compareHeight(human.feet, human.inches)
            // let dCD = dino.comparDiet(human.diet)
            // facts = [jsonFact, dCW, dCH, dCD]

            let dinoTile = document.createElement("h2");
            dinoTile.innerHTML = `<h2>${dino.species}</h2>
            <img src="images/${dino.species.toLowerCase()}.png" alt="${dino.species}"/>
            <h4>${dino.diet}</h4>`;
            
            tile.appendChild(dinoTile);
        }
        document.querySelector("#grid").appendChild(tile);
    }
    console.log(dinosaurArray)
}

// Remove form from screen
function removehumanForm(){
    document.querySelector("#dino-compare").style.display = "none"
};


// On button click, prepare and display infographic
const compareBtn = document.querySelector('#btn');

compareBtn.addEventListener("click", function(){
        removehumanForm();
        generateTiles(dinoArray, getHumanData());
        getHumanData();
        getDinoArray();
    });