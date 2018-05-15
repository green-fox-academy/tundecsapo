'use strict';
export{};

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

let nameAndBalance: any[] = [];
function getNameAndBalance(accNum: number): string {
  for (let i: number = 0; i < accounts.length; i++) {
    if (accNum === accounts[i].account_number) {
      nameAndBalance.push(`"${accounts[i].client_name}"`);
      nameAndBalance.push(`"${accounts[i].balance}"`);
    }  
  }
  let nameBalStr: string = nameAndBalance.join(", ");
  return nameBalStr;
}
console.log(getNameAndBalance(11234543));

function transferAmount(list: any[], fromAcc: number, toAcc: number, amount: number): string {
  let fromAccCount: number = 0;
  let toAccCount: number = 0;  
  let fromIndex: number = 0;
  let toIndex: number = 0;
  for (let i: number = 0; i < list.length; i++) {  
    if (list[i].account_number === fromAcc) {
      fromAccCount++;
      fromIndex = i;
    } else if (list[i].account_number === toAcc){
      toAccCount++;
      toIndex = i;
    }
  }
  if (fromAccCount === 0 || toAccCount === 0) {
    return "404 - account not found";
  }
  else {
    list[fromIndex].balance -= amount;
    list[toIndex].balance += amount;
    // ADDITIONAL LINES, SO WE CAN SEE EASIER WHO MADE THE TRANSFER TO WHOM, 
    // AND WHAT THE NEW BALANCES ARE
    let fromAcc: string = `The sender's, ${list[fromIndex].client_name}'s balance after the transfer: ${list[fromIndex].balance}\n`;
    let toAcc: string = `The recipient's, ${list[toIndex].client_name}'s balance after the transfer: ${list[toIndex].balance}`;
    return fromAcc + toAcc;
  }
}
console.log(transferAmount(accounts, 43546731, 23456311, 500.0));
console.log(accounts);

export = {
    getNameAndBalance,
    transferAmount,
    accounts
};
