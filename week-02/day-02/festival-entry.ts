'use strict';
export{};

let watchlist: string[] = [];
let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(festivalGoers: any[]): string[] {
  let festivalPeople: string[] = [];
  for (let i: number = festivalGoers.length - 1; i >= 0; i--) {
    if (festivalGoers[i].guns > 0) {
      watchlist.unshift(festivalGoers[i].name);
      festivalGoers.splice(i, 1);
      //we don't confiscate the alcohol of those who have guns and were not let in
    } else if (festivalGoers[i].alcohol > 0) {
      securityAlcoholLoot += festivalGoers[i].alcohol;
      festivalGoers[i].alcohol = 0;
      // the people who we let into the festival has 0 alcohol and 0 gun with them, 
      // so it is enough if we print out their name
      festivalPeople.unshift(festivalGoers[i].name);
    } else {
      festivalPeople.unshift(festivalGoers[i].name);
    }
  }  
  return festivalPeople;
}
console.log(securityCheck(queue));
//console.log(watchlist);
//console.log(securityAlcoholLoot);

export = securityCheck;
