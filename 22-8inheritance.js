class Parent{
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +' '+ this.fatherName; //Ei function e existing and parent class er property access kora jai.
        //Eibhabe function declare kora jai inside a class but 'function' word ta likha jabe na function er aage. Baki shob same.
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby.getFullName()); //Eibhabe function (video te method bolse) call kora jai.
console.log(baby2);