let emptySuit = {
  J: null,
  Q: null,
  K: null,
  A: null,
};

//fill empty
for (let i = 2; i <= 10; i++) {
  emptySuit[i] = null;
}

emptyDeck = {
  hearts: { ...emptySuit },
  clubs: { ...emptySuit },
  diamonds: { ...emptySuit },
  spades: { ...emptySuit },
};

//check if a deck is full
function deckIsFull(deck) {
  //iterate over all suits
  for (const suit_key in deck) {
    if (Object.hasOwnProperty.call(deck, suit_key)) {
      const suit = deck[suit_key];
      //iterate over all cards
      for (const card_key in suit) {
        if (Object.hasOwnProperty.call(suit, card_key)) {
          const element = suit[card_key];
          //if at least one card of a suit is null, the deck is not full
          if (element === null) {
            return false;
          }
        }
      }
    }
  }
  //no null cards, deck is full
  return true;
}

//groups the cards in a set of decks and returns the amount of them which get full
function orderCards(cards) {
  let decks = []; //existent decks
  cards.forEach((card) => {
    let i = 0;
    //true if the card is placed in an existent deck
    let wasPlaced = false;
    //iterate over existent decks
    for (; i < decks.length; i++) {
      const deck = decks[i];
      //is the current card's place empty in this deck?
      if (!deck[card.suit][card.value]) {
        //place the card
        deck[card.suit][card.value] = card.value;
        //set wasPlaced flag
        wasPlaced = true;
        //finish operation for this card (could have been also return eliminating the need of the flag)
        break;
      }
    }
    if (!wasPlaced) {
      //is current card NOT placed already?
      //create a new deck
      let d = JSON.parse(JSON.stringify(emptyDeck));
      //place the card
      d[card.suit][card.value] = card.value;
      //add the deck to existent decks collection
      decks.push(d);
    }
  });
  //filter out the decks that aren't full and return the resultant length
  return decks.filter((deck) => deckIsFull(deck)).length;
}

module.exports = orderCards;
