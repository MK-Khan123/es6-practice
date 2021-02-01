class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Wills Little Flower";
    }
}

const student1 = new Student(12, "Momota");
const student2 = new Student(22, "Tanaz");
const student3 = new Student(29, "Muquit");
console.log(student1, student2, student3);
console.log(student1.name, student2.name, student3.name);