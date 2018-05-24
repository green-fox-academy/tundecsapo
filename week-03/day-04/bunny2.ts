function sumBunnyEars(bunnies: number): number {
    if (bunnies >= 1) {
      if (bunnies % 2 === 0) {
        return 3 + sumBunnyEars(bunnies - 1);
      }
      return 2 + sumBunnyEars(bunnies - 1); 
    }
    return bunnies;
  }
  console.log(sumBunnyEars(9));
  