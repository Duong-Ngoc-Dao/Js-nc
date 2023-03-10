'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via angelo Tavati 23, Firenze, italy',
    categories: ['Italian', 'Pizzeria', 'vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainmenu : ['Pizza', 'pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
       return [this.starterMenu[starterIndex]] 
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z ] = arr;
console.log(x, y, z); 
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log[main, secondary];