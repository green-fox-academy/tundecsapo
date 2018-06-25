let str: string = 'This is my original string';

/*
console.log(str.indexOf('original'));
console.log(str.indexOf('!'));
console.log(str.indexOf('is', 4));

console.log(str.replace('original', 'new'));
console.log(str);

str = str.replace('original', 'new');
console.log(str);

let appleStr: string = 'apple';
console.log(appleStr.split(''));
console.log(str.split(' '));
console.log(str.split(' ', 3));
*/

/*
console.log(str.slice(8, 19));
console.log(str.slice(8, -3));
console.log(str.slice(-1, 10));
console.log(str);

console.log(str.substring(8, 19));
console.log(str.substring(19, 8));
*/

console.log(str.charAt(11));
console.log(str[11]);

console.log(str.concat(' and I like it')); // GOOD SOLUTION
// same as: console.log(str + ' and I like it'); - WRONG USAGE
// and: console.log(`${str} and I like it.`); - USE THIS. BEST SOLUTION. 

let car = {
    brand: 'Audi',
    type: 'A6',
    color: 'blue',
    start: () => {
        console.log('Wrom-wrom');
    }
};

console.log(typeof car);
console.log(car);
console.log(car.type);
car.type = 'A1'
console.log(car.type);
console.log(car['type']);

let keyStr = 'color';
console.log(car[keyStr]);

console.log(Object.keys(car));

//let keyArray: string[]; = Object.keys(car);
console.log('****************************************');
Object.keys(car).forEach(key => {
    console.log(car[key]);
});

Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`);
});

//calling a function from an object
console.log(car.start());

console.log(car.hasOwnProperty('color'));
console.log(car.hasOwnProperty('CDplayer'));

let objArray: any[] = [];
objArray.push(car);
objArray.push({
    brand: 'BMW',
    type: 'X6',
    color: 'red',
    start: () => {
        console.log('Wrom-wrom');
    }    
});

console.log(objArray);
objArray.forEach(car => {
    console.log(`I have a(n) ${car.brand}`)
});
