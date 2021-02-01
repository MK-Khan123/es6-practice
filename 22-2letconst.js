const hubby = 'Elias Kanchon';
// hubby = 'Omar Sunny'; Eita kora jabe na. const type variable er just ekta value e assign kora jai. Pore change kora jai na.
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12); //const Array te element push kora jabe.
// numbers = ['Omar', 'Salman', 'Omit Hasan']; //But notun kore abr array declare kora jabe na.

const nayok = { name: 'Sakib Khan', phone: 4578 }; //property r value change kora jabe. Even property add o kora jabe. Kintu notun kore abr object declare kora jabe na.
// console.log(numbers);

let patientName = "Rahim Chacha";
patientName = "Fatema Khala"; //let variable er value change hoite dei. const dei na.
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i); // i for block er under ei kaaj korbe. Eitake scope variable bole. var diye i declare korle baire theke console.log(i); korle thik e result ashto.

//Let ke bola hoi scope variable.