
// Array is a object its collection of heterogeneous elements.
// Array index position start `0`.
// javaScript Array can be accessed. then sent a shallow copy ( ) mean refer  address change original array elements  postion. values store inside Heap memory.
// Deep copy means send copy of values is a store in stack memory.

/// Array create by to types are square brackets  and  new keyword.

// const arr = [1,2,3,"ravi","sahani","rohini"]; // type one [] bracket.

// const arr = new Array("ravi","sahani","rohini");

// console.log(arr); // basic find elements of arr

// console.log(arr[1]); // find elements shallow copy

// arr[1]="rihan";

// console.log(arr); // change in main array but referred  address is same

// moder time used imp method in JSArray.

// pop():> without arg remove last index element , push():> passed one arg add one element at array of last index
// unshift():> same pop but starting of arr(), shift():> same as push() but start index of array
// CHANGE MAIN ARRAY

const vegii = [`cucumber `,`onion`,`carrot`,`lady finger`,`potatoes `];

//  console.log(vegii.pop());

//  console.log(vegii.push("ginger"));

// console.log(vegii);

// interview  question difference  between slice and splice 
// slice():> its take to arg. start index , end index there are never includes range 

console.log(vegii.slice(1,3));

console.log(vegii);


// splice():> its take to three arg. start index, count index, insert element , its change main array.
console.log(vegii.splice(1,3,"corinder","apple"));

console.log(vegii);














