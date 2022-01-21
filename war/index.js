function getNewDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/', {method: "GET"})
       .then(res => res.json())
       .then(data => console.log(data))
}

document.getElementById('btn').addEventListener('click', getNewDeck)

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
const secondPromise = promise.then(res => res.json())
console.log(secondPromise)
//Promise Chaining
// .then(data => console.log(data))

/**
 * Mini challenge: Figure out what `promise.then()` returns! 
 * Save the result to a variable and log it to the console.
 */