const person = {name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Emma Watson', address:'Kochu Khet', phone:'01717112211', friends:['Tom Hanks', 'Tom Cruise', 'Chris Hemsworth']};

const {address, phone, gfName, salary} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader'
    }
};

const {leader} = complexObject.info; /*Ei complexObject.info maane hoilo 
info: {
    address: 'Kola Bagan',
    leader: 'Tiger Leader'
};*/
console.log(leader);

//Eikhane curly brackets er bhitor order o maintain korar kono dorkar nai.

// const {phone, gfName} = {name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Emma Watson', address:'Kochu Khet', phone:'01717112211', friends:['Tom Hanks', 'Tom Cruise', 'Chris Hemsworth']};

//Eibhabe {phone} likhle ar equals to ('=') daan pashe ekta object jodi thake jeitar moddhe 'phone' naam e ekta property ase then shei property r value equals to er left side er variable e assigned hoye jabe.

// const gfName = person.gfName;
// const phone = person.phone;

console.log(address, gfName, phone, salary);
console.log(address, gfName, phone, salary);

// Array diyeo destructuring kora possible and oitai dekhbo ekhon

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends; //Jei koita variable e array nisi oigula baad e bakigula shob restFriends e dhukbe. Jodi eikhane shudhu chotoFriend thakto tahole chotoFriend baad e baki shob restFriends e jaito.
console.log(chotoFriend, nextFriend, restFriends);