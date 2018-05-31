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

test('get fibonacci number', t => {
  t.equal(getFibonacci(true), 'The input is not a number. This method only works for numbers as input.');
  t.end();
})

test('get fibonacci number', t => {
  t.equal(getFibonacci(null), 'The input is not a number. This method only works for numbers as input.');
  t.end();
})

test('get fibonacci number NaN NaN NaN NaN', t => {
  t.equal(getFibonacci(NaN), 'This metod only works for 0 or positive integers.');
  t.end();
})

test('get fibonacci number', t => {
  t.equal(getFibonacci(-2), 'This metod only works for 0 or positive integers.');
  t.end();
})

test('get fibonacci number', t => {
  t.equal(getFibonacci(1/2), 'This metod only works for 0 or positive integers.');
  t.end();
})
