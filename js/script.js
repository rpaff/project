// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dhfjshjf');

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets); 

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log (1 && 2 && 3);

console.log (!1 && 2 || !3);

console.log (25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

