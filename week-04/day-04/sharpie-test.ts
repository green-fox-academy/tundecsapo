'use strict';

import { test } from 'tape';
import { Sharpie } from './sharpie';

test('sharpie without amount parameter', t => {
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use(), 99);
  t.end();
})

test('sharpie with amount', t => {
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use(20), 80);
  t.end();
})

test('sharpie with string', t => {
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use('something'), 'The input is a string. This method only works for numbers as input.');
  t.end();
})

test('sharpie with undefined parameter', t => {
  let testAmount;
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use(testAmount), 99);
  t.end();
})

test('sharpie wit boolean', t => {
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use(true), 'The input is not a number. This method only works for numbers as input.');
  t.end();
})

test('sharpie wit negative number', t => {
  let testSharpie = new Sharpie('black', 100);
  t.equal(testSharpie.use(-2), 'The amount of ink used can\'t be negative.');
  t.end();
})
