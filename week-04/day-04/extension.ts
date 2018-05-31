'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};

export function median(pool: number[]): number {
  pool = pool.sort(function(a, b){return a - b})
  if (pool.length % 2 !== 0) {
    return pool[Math.ceil(pool.length / 2) - 1];
  } else {
    let lowerIndex: number = pool.length / 2;
    let higherIndex: number = lowerIndex + 1;
    return (pool[lowerIndex] + pool[lowerIndex]) / 2;
  }
}

export function isVowel(c: string): boolean {
  if (['a', 'u', 'o', 'e', 'i'].indexOf(c) !== -1) {
    return true;
  } else {
    return false;
  }
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
