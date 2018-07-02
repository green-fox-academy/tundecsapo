'use strict';

module.exports = {

  highCard: (hand1, hand2) => {
    let maxHand1 = 0;
    let maxHand2 = 0;
    let scores = ['2', '3', '4', '5', '6', '7', '8', '9', '1', 'J', 'Q', 'K', 'A'];

    hand1.forEach((card) => {
      if (scores.indexOf(card[0]) > maxHand1) {
        maxHand1 = scores.indexOf(card[0]);
      }
    })

    hand2.forEach((card) => {
      if (scores.indexOf(card[0]) > maxHand2) {
        maxHand2 = scores.indexOf(card[0]);
      }
    })

    if (maxHand1 > maxHand2) {
      return 'hand1';
    } else if (maxHand1 < maxHand2) {
      return 'hand2';
    } else {
      return 'tie';
    }
  },

  counter: (cards) => {
    let hand = new Object();
    for (let i = 0; i < cards.length; i++) {
      if (!hand[cards[i][0]]) {
        hand[cards[i][0]] = 1;
      } else {
        hand[cards[i][0]] += 1
      }
    }
    return hand;
  },

  pair: (hand1, hand2, value) => {
    let hand1Obj = module.exports.counter(hand1);
    let hand2Obj = module.exports.counter(hand2);

    let pair1 = Object.keys(hand1Obj).map((e) => {
      if (hand1Obj[e] === value) {
        return e; 
      } else {
        return '';
      }
    })
    console.log(pair1);

    let pair2 = Object.keys(hand2Obj).map((e) => {
      if (hand2Obj[e] === value) {
        return e; 
      } else {
        return '';
      }
    })
    console.log(pair2);


    return module.exports.highCard(pair1, pair2);

  },

  twopair: (hand1, hand2) => {
    return module.exports.pair(hand1, hand2, 2);
  },

  triplepair: (hand1, hand2) => {
    return module.exports.pair(hand1, hand2, 3);
  },

  straight: (hand1, hand2) => {
    //return 0;
  }
}
