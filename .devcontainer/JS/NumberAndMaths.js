// we are create number object like this...
// some imp method like 
// toString(),toPricision(),tofixed(),toLocalasString()

const newNumber = new Number(10000.00);

console.log(newNumber.toString().replaceAll(`0`,`k`)); // convert to sring value.

console.log(typeof(newNumber));

const newNumber2 = new Number(214.60);

console.log(newNumber2.toFixed(0));  // its use after deciaml number or digit fixed

console.log(newNumber2.toPrecision(3)); // its use for round figure  no. 

console.log(newNumber.toLocaleString('en-IN'))  // its used in production 



// *******************************************Maths*********************************************************************


// imp formula :> console.log(Maths.floor(maths.random() * (max -min +1) + min);


console.log(Math.round(4.23));

console.log(Math.ceil(54.23)); // only retrun max value

console.log(Math.floor(63.23));  // only return min value  imp method 

console.log(Math.random());  // onlu retrun 0 to 1 range value like 0.1,0.5,1,0,0.6


// if i create one application i want to some range for example so how to use floor random

const min = 1;
const max = 9;

console.log(Math.floor(Math.random() * (max - min + 1))+min);






