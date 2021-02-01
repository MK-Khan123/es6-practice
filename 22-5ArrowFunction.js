//1. function doubleIt(num) {
//     return num * 2;
// }

//2. const doubleIt = function myFunc(num) {
//     return num * 2;
// }
// const result = doubleIt(5);

const doubleIt = num /*eikhane hobe parameter*/ => num * 2 /*eikhane hobe return*/;
//This is known as an arrow function. Uporer 2ta function er short version hoilo eita.
const result = doubleIt(50);

const add = (x, y) => x + y;
//Jodi ekadhik parameter thake then bracket dewa lagbe and parameter gula comma diye separate kore dewa laagbe. Aager example eo parameter 'num' ke (num) eibhabe likha jai but sheta optional, not mandatory. Second example e bracket mandatory.
const result2 = add(50, 70);

const give5 = () => 5;
//Empty parameter thakle just erokom '()' diye rekhe dite hoi.
const result3 = give5();

//Ek line er beshi jodi function hoi tahole eibhabe likhe curly brackets er majhe. And return ta manually kora laage.
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(5,6));