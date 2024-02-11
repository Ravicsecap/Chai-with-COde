 
// //  // object created by  literal way its not singlton mean unique  there as no duplicate copy
// //  // object created by constructor way its a single tone 
// // // object is a collection of pairs of keys and values
// // // object keys is a string bhind the scene and accessd by . notation and [""] notation:> mostly  used bracket notation if key 1 and and values inside space symbol and etc avoid
// // // example:> obj ={num:"abc1", full name:"Ravishekhar"} thats time //console.log(obj["full name"])

const BankAcc ={
    name:`Ravishekhar Sahani`,
    "Phone Number":970245756,
    Address:"Ramji Gupta Chwal,Rajiv Nagar,Khar Danda,Santacruz-West",
    "B.M.C name": 'Bombay Munciple Coporation',
}

console.log(BankAcc); // Object accessed by name
console.log(BankAcc["Phone Number"]); // interview question that time know BTS key is a String Value,thats time used for [] notattion

console.log(BankAcc.Address); //  Simple key Value. 

console.log(BankAcc.name);

console.log(BankAcc["B.M.C name"])

// // // how to update keys value example below:-

BankAcc["Phone Number"]="9867164726"

console.log(BankAcc);

// // // how to create Symbol(datatype) as object key value accesssed

var UNcpin =  Symbol("Ravishekhar");

const BankAcc ={
         name:`Ravishekhar Sahani`,
         "Phone Number":970245756,
           [UNcpin]:"Khngdi" , // synntax of symbol  as object key
         Address:"Ramji Gupta Chwal,Rajiv Nagar,Khar Danda,Santacruz-West",
         "B.M.C name": 'Bombay Munciple Coporation',
}    




console.log(BankAcc)

// How to fixed data no can override  or manipulate

BankAcc[UNcpin]="RA021vi"
// Object.freeze(BankAcc);

BankAcc[UNcpin]="RaKL12vi"
console.log(BankAcc); // we cant not change attributes 

// function as object keys
// if i call function name :> o/p is a function[anonymous ], write  functionname with braces'  myfunction , myfunction() its a call.

BankAcc.feedback = function (){
    console.log(`hello world`);
}
BankAcc.feedback2 = function myfunction2(){
    console.log(`Thank you for opening your Account ${this.name}`); // string immpolasion this key words used for same object key address there own object is Bankacc

}
console.log(BankAcc.feedback);  // anonymous  function as parameters assume
console.log(BankAcc.feedback());  
console.log(BankAcc.feedback2());  

console.log(BankAcc);