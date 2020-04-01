// JavaScript 1
// Module Assignment 3
// 19.4.2020

// Question 1
(a, b) => a - b;

// Question 2
fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        logNames(json.results);
    })
    .catch(function() {
        document.location.href = "error.html";
    })
;

function logNames(games) {
    games.forEach(function(game) {
        console.log(game.name);
    });
}

// Question 3
let catString = "These cats are outrageous".replace("cats", "giraffes");

// Question 4
const query = document.location.search;
const params = new URLSearchParams(query);
//const params = new URLSearchParams("?userId=7");

if(params.has("userId")) {
    params.get("userId") < 10 ? 
        document.location.href = "first.html" :
        document.location.href = "second.html";
} else {
    document.location.href = "third.html";
}

// Question 5
const button = document.querySelector(".btn");
document.querySelector(".container").removeChild(button);

// Question 6
const newElement = document.createElement("li");
newElement.innerText = "Parrots";
document.querySelector(".animals").appendChild(newElement);
document.querySelector(".cows").after(newElement);

// Question 7
fetch("https://api.rawg.io/api/games/3801")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function(error) {
        console.log(error); // Question says to log it, not sure if this is some colloquial expression for .dir function
    })
;
