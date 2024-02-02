
// DataTypes are grouping based on how to located memory space and how to access //
// a) call back value    b) refer value =>  a)primitive Datatypes    b) Non-Primitive Datatpes

let isNumber = 123456;

console.log(typeof isNumber);  // number

let isBooleanValue = true;

console.log(typeof isBooleanValue); // boolean

const isString = "235689";

console.log(typeof isString);  // string

const isBigInt = 133n;  

console.log(typeof(isBigInt)); // bigint

let id = Symbol("1235")

let idIsUsername = Symbol("1235");

console.log(id === idIsUsername);  // false just bcus symbol datatypes create BTS new  memory location 

let whatIsTemp ;

console.log(typeof whatIsTemp);  //undefined

let  isNight = null ;

console.log(typeof  isNight);  // OBJECT


console.log(".............................................................................");



// Non-primitive datatypes its only send reference address like inde position
// 1) Array       2) Object      3)function


let hotel_food =["Dal_Tadka","Tandoori_roti","Paneer_sabji","etc"];

console.log(`Hotel Menu => ${hotel_food}`) 

console.log(typeof hotel_food);// FUNCTION OR OBJECT 


const market ={
    shopes:"fruit and flower shops",

    area:"fool market Dadar - west",

    location:"centre mumbai",
};

console.log([`${market.shopes}, ${market.location}`]);

console.log(typeof market);

let myFunction = function(){

    console.log("Hello ! World");
}

console.log(myFunction);

console.log(typeof (myfunction));