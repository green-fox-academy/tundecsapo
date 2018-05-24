function countBunnyEars(bunnies: number): number {
  if (bunnies >= 1) {
    return 2 + countBunnyEars(bunnies - 1);
  }
  return bunnies;
}
console.log(countBunnyEars(100));
