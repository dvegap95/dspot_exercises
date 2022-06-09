//initialice a counter for every card in a suite;
let emptySuit = {
  J: 0,
  Q: 0,
  K: 0,
  A: 0,
};

//fill empty
for (let i = 2; i <= 10; i++) {
  emptySuit[i] = 0;
}

//create a 4 suite (deck-like) group of counters
emptyDeckGroup = {
  hearts: { ...emptySuit },
  clubs: { ...emptySuit },
  diamonds: { ...emptySuit },
  spades: { ...emptySuit },
};

function fullDecks(deck) {
  let min = inf; //maximum possible of cards in a suite
  for (const suit_key in deck) {
    if (Object.hasOwnProperty.call(deck, suit_key)) {
      const suit = deck[suit_key];
      //iterates over the card counters
      for (const card_key in suit) {
        if (Object.hasOwnProperty.call(suit, card_key)) {
          const element = suit[card_key];
          //if current counter is less than minimum, minimum = current counter
          if (element < min) min = element;
        }
      }
    }
  }
  //return minimum counter, which also indicates the amount of full decks
  return min;
}
//counts all the similar cards grouped by type and suit returning the amount of full decks
function orderCards(cards) {
  //initialize a deckGroup with all card counters on 0;
  const deckGroup = JSON.parse(JSON.stringify(emptyDeckGroup));
  //iterate over the cards
  cards.forEach((card) => {
    //increment counter corresponding to the current card's suit and value
    deckGroup[card.suit][card.value]++;
  });
  return fullDecks(deckGroup);
}
