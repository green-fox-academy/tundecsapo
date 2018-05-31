'use strict';

import {test} from 'tape';
import {getFibonacci} from './fibonacci';

test('get fibonacci number', t => {
  let testText: string = 'something';
  t.equal(getFibonacci(testText), 'The input is a string. This method only works for numbers as input.');
  t.end();
})

test('get fibonacci number', t => {
  let testInput;
  t.equal(getFibonacci(testInput), 'The input is empty. This method only works for numbers as input.');
  t.end();
})

test('get fibonacci number', t => {
  let testNum: number = 8;
  t.equal(getFibonacci(testNum), 21);
  t.end();
})
