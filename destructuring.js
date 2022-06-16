'use strict';

const restaurant = {
    name: 'starbucks cofee',
    location: 'via vishrambuag, sangli',
    categories: ['cofee', 'milkshake', 'tea', 'ice-tea'],
    starterMenu: ['cofee', 'bread', 'buiscuit'],
    mainMenu: ['pizza', 'cold-cofee'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    };

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
    orderDelivery: function(starterIndex, mainIndex, time, address) {
        cobsole.log('order recieved ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]};
    }
};

restaurant.orderDelivery({
    time: '22:00',
    address: 'via de sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});
const { name, openingHours categories } = restaurant;
console.log(name, openingHours, categories);

const { nae: restaurant, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
restaurant
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 112;
let b = 888;
const obj = { a: 24, b: 6, c: 14 };
({ a, b } = obj);
console.log(a, b);

const { fri: { open: 0, close }: c, } = openingHours;
console.log();


// destruring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, mainCourse);


let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6];
        const [i, , j] = nested;
        console.log(i, j);

        const [i, , [j, k]] = nested;
        console.log(i, j, k);

        const [p = 1, q = 1, r = 1] = [8, 9];
        console.log(p, q, r);