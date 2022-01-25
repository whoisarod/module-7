let deckId

const cardsContainter = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            
            cardsContainter.children[0].innerHTML = `
            <img src=${data.cards[0].image} class='card'/>
            `
            cardsContainter.children[1].innerHTML = `
            <img src=${data.cards[1].image} class='card'/>
            `
        })
})

function determineCardWinner(card1, card2) {
    const valueOptions = [
        "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"
    ]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex) {
        console.log('Card 1 Wins!');
    } else if (card1ValueIndex < card2ValueIndex) {
        console.log('Card 2 Wins!');
    } else {
        console.log("It's a tie!");
    }
}