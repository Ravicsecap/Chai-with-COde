

// typeof() => used for checks which types are data like string , number , Boolean.
// Number() => convert to number
// String() => convert to string value.
// Boolean() =>  convert to true or false or 1 or 2.

let a = "1457";
console.log(typeof a); //checks and retrun number 

let b = String(a);
console.log(typeof b);  // convert to string

c=Number(b);
console.log(typeof c); // conver to number

d=Boolean(c); 
console.log(typeof d); // convert to boolean;


// note:- its mean "" => false, "hero"=> true


let value = true;
console.log(typeof value); // boolean value

let number = Number(value);
console.log(number);


let str = "";

str2 = Boolean(str);
console.log(str2);

let me = null
console.log(me); // null

mine = String(me);  // Nan
console.log(mine);
console.log(typeof mine);