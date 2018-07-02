'use strict';

const test = require('tape');
const {highCard, counter, pair, twopair, triplepair, straight} = require ('./poker.ts');

test('poker test', t => {
  let hand1 = ['2H', '3D', '5S', '9C', 'KD']; 
  let hand2 = ['2C', '3H', '4S', '8C', 'AH'];
  t.equal(highCard(hand1, hand2), 'hand2');
  t.end();
})

test('highCard test for tie', t => {
  let hand1 = ['2H', '3D', '5S', '9C', 'KD']; 
  let hand2 = ['2C', '3H', '4S', '8C', 'KH'];
  t.equal(highCard(hand1, hand2), 'tie');
  t.end();
})


test ('counter', t => {
  let hand1 = ['2H', '3D', '5S', '9C', 'KD']; 
  t.deepEqual(counter(hand1), {
    '2': 1,
    '3': 1,
    '5': 1,
    '9': 1,
    'K': 1,
  });
  t.end();
})

test ('pair', t => {
  let hand1 = ['2H', '2D', '5S', '9C', 'KD']; 
  let hand2 = ['AC', '3H', '4S', '8C', 'AH'];
  t.equal(pair(hand1, hand2, 2), 'hand2');
  t.end();
})

test ('twopair', t => {
  let hand1 = ['2H', '2D', '5S', '5C', 'KD']; 
  let hand2 = ['AC', '3H', '3S', '8C', 'AH'];
  t.equal(twopair(hand1, hand2), 'hand2');
  t.end();
})

test ('triplepair', t => {
  let hand1 = ['AC', '3H', '3S', 'AC', 'AH'];
  let hand2 = ['2H', '2D', '2S', '5C', 'KD']; 
  t.equal(triplepair(hand1, hand2), 'hand1');
  t.end();
})

test ('straight', t => {
  let hand1 = ['2C', '3H', '4S', '5C', '6H'];
  let hand2 = ['6H', '7D', '8S', '9C', '1D']; 
  t.equal(straight(hand1, hand2), 'hand2');
  t.end();
})