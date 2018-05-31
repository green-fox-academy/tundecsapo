'use strict';

import {test} from 'tape';
import {apple} from './apples';

test('simple string output', t => {
  t.equal(apple.getApple(), 'apple');
  t.end();
})
