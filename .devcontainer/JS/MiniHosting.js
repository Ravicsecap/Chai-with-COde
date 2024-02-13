
// js function hold as expression 
// understand with pg 

console.log(myfuction(200));  // normal function
function myfuction(num1){
    return num1
}

// console.log(myfuction(200))

// but expression is a if i am holding a function inside a variable

console.log(myfuction(200));   // this is a hosting bcus i am decleared frist and call function upper side then function read interpiter.

let myfuction = function (num1){
    return num1
}

myfuction(200)
