'use strict';

import {test} from 'tape';
import {letterCount} from './count-letters';

test('counting letters', t => {
  let testText: string = 'something';
  let result: Object = { s: 1, o: 1, m: 1, e: 1, t: 1, h: 1, i: 1, n: 1, g: 1 };
  t.deepEqual(letterCount(testText), result);
  t.end();
})
