'use strict';

import {test} from 'tape';
import {List} from './sum';

test('simple sum number output', t => {
  let testNumList: number[] = [1, 2, 3]; 
  let newList = new List();
  t.equal(newList.sum(testNumList), 6);
  t.end();
})

test('test empty array', t => {
  let emptyList: number[] = []; 
  let testList = new List();
  t.equal(testList.sum(emptyList), 'This array is empty. This method only works for list of numbers.');
  t.end();
})

test('test one elem array', t => {
  let oneElemList: number[] = [5]; 
  let testList = new List();
  t.equal(testList.sum(oneElemList), 5);
  t.end();
})

test('test multiple elem array', t => {
  let multiElemList: number[] = [2, 3, 4]; 
  let testList = new List();
  t.equal(testList.sum(multiElemList), 9);
  t.end();
})

test('test "null" array', t => {
  let nullElemList: number[] = [null]; 
  let testList = new List();
  t.equal(testList.sum(nullElemList), 'This method only works for list of numbers.');
  t.end();
})

test('test string array', t => {
  let stringElemList: string[] = ['string', 'anotherstring']; 
  let testList = new List();
  t.equal(testList.sum(stringElemList), 'This method only works for list of numbers.');
  t.end();
})
