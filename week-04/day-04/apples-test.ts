'use strict';

import {test} from 'tape';
import {Apple} from './apples';

test('simple string output', t => {
  let apple = new Apple();
  t.equal(apple.getApple(), 'apple');
  t.end();
})
