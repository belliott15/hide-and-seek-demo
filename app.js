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


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('shed', correctSpot);
});

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('tree', correctSpot);
});

boulderButton.addEventListener('click', () => {
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
    // winsEl.textContent = correctGuesses;
    // totalEl.textContent = totalGuesses;
    // lossesEl.textContent = totalGuesses - correctGuesses;
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
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    // update the DOM to show the new value of wins, losses and total guesses to the user
}