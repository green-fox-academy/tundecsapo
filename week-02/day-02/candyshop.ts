'use strict';
export{};

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];
let productStr: string = '';

function sweets(products: any[]): string {
    products.forEach((value, key) => {
        if (products[key] === 2) {
            products.splice(key, 1, '"Croissant"')
        } else if (!products[key]) {
            products.splice(key, 1, '"Ice cream"')
        } else {
            products.splice(key, 1, `"${products[key]}"`)
        }
    });
    productStr = products.join(', ');
    return productStr;
}
console.log(sweets(shopItems));
export = sweets;
