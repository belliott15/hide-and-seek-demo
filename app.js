// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const lastGuess = document.getElementById('last-guess');
const treeGuess = document.getElementById('tree-guess');
const boulderGuess = document.getElementById('boulder-guess');
const shedGuess = document.getElementById('shed-log');

const hideBehindTree = document.getElementById('hideTree');
const hideBehindBoulder = document.getElementById('hideBoulder');
const hideBehindShed = document.getElementById('hideShed');


let correctGuesses = 0;
let totalGuesses = 0;

let totalTree = 0;
let totalBoulder = 0;
let totalShed = 0;

let foundTree = 0;
let foundBoulder = 0;
let foundShed = 0;



shedButton.addEventListener('click', () => {
    totalShed++;
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('shed', correctSpot);
});

treeButton.addEventListener('click', () => {
    totalTree++;
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('tree', correctSpot);
});

boulderButton.addEventListener('click', () => {
    totalBoulder++;
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('boulder', correctSpot);
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    // use the random index above and the array of hidingPlaces to get a random hiding place string
    // console.log(hidingPlaces[index]);
    return hidingPlaces[index]; 
    // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
    console.log(userGuess, correctSpot);
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // we can do that by removing the .face class from all containers
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const hiddenHere = document.getElementById(`${correctSpot}-container`);
    console.log(hiddenHere);
    // then add the .face css class to that element so that the face shows up
    hiddenHere.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    if (correctSpot === 'tree'){
        foundTree++;
    } else if (correctSpot === 'boulder'){
        foundBoulder++;
    } else if (correctSpot === 'shed')
        foundShed++;

    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    // update the DOM to show the new value of wins, losses and total guesses to the user
    // show how many guesses were recorded of each selection.
    shedGuess.textContent = totalShed;
    treeGuess.textContent = totalTree;
    boulderGuess.textContent = totalBoulder;
    //show the last guess
    lastGuess.textContent = `${userGuess}`;
    //show where the face was hiding
    hideBehindTree.textContent = foundTree;
    hideBehindBoulder.textContent = foundBoulder;
    hideBehindShed.textContent = foundShed;
}

