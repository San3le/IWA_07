// CHALLENGES 1,2 and 3

// Challenge 1 

/***const value = "3"
console.log(value + 4 + value)***/

// Solution

const value = 3;
console.log(value + 4 + value);


// Challenge 2

/**const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!")  */



// Solution 

const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning, ${firstname}!`);
} else {
  console.log("Good Morning!");
}

// Challenge 3

/**const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result) */ 

// Solution

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(-9 394) + parseFloat( -4 582.2);
const leo = `{Leo} {Musvaire} Owed R{ 4 582.2}`;
const sarah = `{Sarah} {sarahSurname} Owed R{9 394}`;
const total = "Total amount owed:'R 13 976.20'";


console.log(result);





