function addRestaurantListener() {
    startBtn = document.getElementById('start-random-button');

    // Replace 'functionName' with the name of the function that you have written
    startBtn.addEventListener("click", startRandom);

    getBtn = document.getElementById('get-restaurant-button');

    // Replace 'functionName' with the name of the function that you have written
    getBtn.addEventListener("click", selectRestaurant);
}

restaurants = ['Nasi Goreng', 'McDonald', 'Kentucky', 'Mixed Rice', 'Pork Noodle'];
var colors = [];

for (var i=0;i<restaurants.length;i++){
    colors.push(getRandomColor())
}
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
    var index = getRandomInt(0, restaurants.length);
    paraRestaurant.innerHTML = restaurants[index];
    paraRestaurant.style.color = colors[index];

    //
    if (document.getElementById('result-message')){
        var resultMessage = document.getElementById('result-message');
        resultMessage.innerHTML='';
    }

}

function selectRestaurant() {
    clearInterval(nIntervalID);

    var paraStatement = document.createElement('p');
    paraStatement.setAttribute('id','result-message');
    var restaurant = document.getElementById('restaurant').textContent;
    paraStatement.innerHTML = "Great, let's go to " + restaurant + '!';
    paraStatement.style.textAlign = 'center';
    var parentNode = document.getElementById('get-restaurant-button').parentNode;
    parentNode.insertBefore(paraStatement,document.getElementById('get-restaurant-button').nextSibling);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);