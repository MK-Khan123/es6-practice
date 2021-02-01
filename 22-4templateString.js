const firstName = "Justin";
const lastName = "Timberlake";
const fullName = firstName + ' ' + lastName + " is a good guy.";
const fullName2 = `${firstName} ${lastName} ${20+30+50} is a good guy.`; //Eita ke bole template string. Very useful in the long run.


const multiLine = "I love you\n" //Ei porer line e giya likhle labh hoi na.
    +"I miss you\n"
    +"I need you\n";

const multiLine2 = `I love you.
I miss you.
No. I don't need you anymore.
Baily Road e dorkar nai jawar.`

console.log(multiLine2);    
// console.log(fullName2);