'use strict';
export {};

let ingredients: any[] = [
    { name: 'vodka', in_stock: 1, needs_cooling: true },
    { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
    { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
    { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
    { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
    { name: 'sugar', in_stock: 0, needs_cooling: false },
    { name: 'lime juice', in_stock: 0, needs_cooling: true },
    { name: 'soda', in_stock: 0, needs_cooling: true }
  ];

function printIngred(ingredients: any[]): void {
  let maxLength: number = 0;
  for (let j: number = 0; j < ingredients.length; j++) {
    if (ingredients[j].name.length > maxLength) {
      maxLength = ingredients[j].name.length;  
    }      
  }

  let firstColList: string[] = [];
  firstColList.push('Ingredient');
  for (let a: number = 0; a < ingredients.length; a++) {
    firstColList.push(ingredients[a].name);  
  }

  let secColList: string[] = [' '];
  for (let a: number = 0; a < ingredients.length; a++) {
    if (ingredients[a].needs_cooling) {
      secColList.push('Yes          ');
    } else {
      secColList.push('No           ');
    }  
  }
 
  let thirdColList: string[] = [' '];
  for (let a: number = 0; a < ingredients.length; a++) {
    if (ingredients[a].in_stock > 0) {
      thirdColList.push(`${ingredients[a].in_stock}       `);
    } else {
      thirdColList.push('-       ');
    }  
  }

  for (let m: number = 0; m < firstColList.length; m++) {
    let ingredArr: string[] = [];
    ingredArr.length = maxLength; 
    let ingredientString: string = firstColList[m];
    for (let k: number = 0; k < ingredientString.length; k++) {
      ingredArr[k] = ingredientString[k]; 
    }
    for (let n: number = ingredientString.length; n < ingredArr.length; n++) {
      ingredArr[n] = ' ';
    }
    let finalIngred: string = ingredArr.join('');
    firstColList[m] = finalIngred;
  }

//to avoid hard-coding, I could do the same with secCol and thirdCol, that I did before with the firstCol, 
//and check the longest item in the coloumn

  let firstLine: string = `+--------------------+---------------+----------+`;
  let secLine: string = `| ${firstColList[0]} | Needs cooling | In stock |`;
  let thirdLine: string = `+--------------------+---------------+----------+`;
  let lastLine: string = `+--------------------+---------------+----------+`;

  console.log(firstLine);
  console.log(secLine);
  console.log(thirdLine);
  for (let p: number = 1; p < firstColList.length; p++) {
    let ingLine: string = `| ${firstColList[p]} | ${secColList[p]} | ${thirdColList[p]} |`;
    console.log(ingLine);
  }
  console.log(lastLine);
}

printIngred(ingredients);

