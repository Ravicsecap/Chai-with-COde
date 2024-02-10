
// In JS date is object and tolocalString must imp method and other methods are imp.
// retrun to ms output
// tolocalString is a object 

const myDate = new Date();  // its is object

console.log(typeof(myDate));

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

// three types create Dates `yyyy/mm/dd` ,`mm/dd/yyy` and normal create `yyyy-mm-dd,hours,minutes,seconds

// 1) const createMyDate = new Date('2024/02/10');

// 3)const createMyDate = new Date(2024,2,10,9,8);

2)const createMyDate = new Date('02/10/2024');

console.log(createMyDate.toLocaleString());

const createMyDate2 = new Date();


const b = createMyDate2.toLocaleString(`default`,{
    minute:`numeric`,
    weekday:`long`
})

console.log(b)

console.log(Math.ceil(2.9));














