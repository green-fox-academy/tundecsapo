'use strict';

import {test} from 'tape';
import {popYearFinder} from './births';

test('find the year with most births', t => {
  let year = popYearFinder('births.csv');
  t.equal(year, 2006); 
  t.end();
})

test('search in not existing file', t => {
  let year = popYearFinder('nofile.txt');
  t.equal(year, null);
  t.end();
})
