function add(num1, num2 = 20) {
    /*1. if(num2 == undefined){ //Puran amol er logic
         num2 = 0;
     } */
    /* 2. num2 = num2 || 20; */ //First time dekhlam eibhabe variable e valu set kora jai.
    return num1 + num2;
}

const total = add(15,15); //Jodi 2nd parameter pass na kori then by default num2 er value 20 hobe. 20 is the backup value. Default value set kora is very useful. For example ami ekta string expect kortisi tokhon ekta empty string default value hishebe dite pari. Ba ekta array expect kortisi tokhon default value hishebe ekta empty array dite pari. As a result, function call korar time e jodi expected parameter pass nao kori taholeo amr code ta break korbe na ba error dekhabe na.
console.log(total);