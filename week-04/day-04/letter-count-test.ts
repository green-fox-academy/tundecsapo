'use strict';

import {test} from 'tape';
import {letterCount} from './letter-count';

test('simple single letter word', t => {
  let counter = letterCount('a');
  //t.equal(counter, counter); - equal method only works with string, numbers and booleans
  t.deepEqual(counter, {a: 1});
  t.end();
})

test('simple multiple same letter word', t => {
  let counter = letterCount('aab');
  //t.equal(counter, counter); - equal method only works with string, numbers and booleans
  t.deepEqual(counter, {a: 2}, {b: 1});
  t.end();
})