'use strict';

import {test} from 'tape';
import {checkAnagrams} from './anagram';

test('checking if anagrams', t => {
  let string1 = 'romain';
  let string2 = 'marion';
  t.equal(checkAnagrams(string1, string2), true);
  t.end();
})

test('checking if anagrams', t => {
  let string3 = 'something';
  let string4 = 'mesoingth';
  t.equal(checkAnagrams(string3, string4), true);
  t.end();
})

test('checking if anagrams', t => {
  let string3 = 'something';
  let string5 = 'mesoingthg';
  t.equal(checkAnagrams(string3, string5), false);
  t.end();
})
