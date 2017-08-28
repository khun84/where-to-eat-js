function addRestaurantListener() {
    startBtn = document.getElementById('start-random-button');

    // Replace 'functionName' with the name of the function that you have written
    startBtn.addEventListener("click", startRandom)

    getBtn = document.getElementById('get-restaurant-button');

    // Replace 'functionName' with the name of the function that you have written
    getBtn.addEventListener("click", selectRestaurant);
}

restaurants = ['Nasi Goreng', 'McDonald', 'Kentucky', 'Mixed Rice', 'Pork Noodle'];

// var getFlag = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var nIntervalID;

function startRandom() {
    nIntervalID = setInterval(showRestaurant, 100);
}

function showRestaurant() {
    var paraRestaurant = document.getElementById('restaurant');
    paraRestaurant.innerHTML = getRestaurant();
    
}

function getRestaurant() {
    var randInt = getRandomInt(0, restaurants.length);
    return restaurants[randInt];
}

function selectRestaurant() {
    clearInterval(nIntervalID);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);