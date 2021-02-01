const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3); //concat use kore array r element gula add kora hoi.
// const allAges2 = [ages, ages2, 5, ages3];

// const allAges2 = [...ages, ages2, 5, ages3]; //First e eita korsilam and pore bujhte parsi bhul ta ki korsi. Concept clear korar jnno useful.

const allAges2 = [...ages, ...ages2, 5, ...ages3]; //This is known as spread operator. Dot dot gula makhon er moto kore boshai dewa hoise. Erpor spread hoye gese.

// console.log(allAges2);

const business = 650;
const minister = 450;
const shochib = 250;
const takaPoisha = [650, 450, 250, 850];

// const maximum = Math.max(business, minister, shochib);
// const maximum = Math.max(takaPoisha); //Eibhbabe result NaN dibe because input parameter hishebe puro array ta ke pass kortisi.

const maximum = Math.max(...takaPoisha); //But eibar thik result dekhabe jokhon spread operator use korbo.

console.log(maximum);