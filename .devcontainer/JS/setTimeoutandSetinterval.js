 
//  /// ... sync and Async function ///
// // * we know that j.s is a sync lang. but there are some  feature add to create Async lang.
// //  * settimeout=> first arg, second arg , third arg, => fuction as parameter,milisecoand, argument.
// //  * cleartimeout => use for setimeout function not excuted => setimeout store as expression or store in variable
// //   then cleartimeout(expression_name).
// // we can create settimeout function two types with arrow or function keyword

// //**** sync type exmaple************ */


// //******   Async type example********** */

// // function addition(){

// //     console.log('hello world')
// // }

// // setTimeout(addition,3000)

// // console.log('frist exctcued');

// //*** with arrow function**** */

// function addtion(num1 ,num2) {

//     console.log(num1+num2);
    
// }

// let clear=setTimeout(()=>{

//     addtion(4,5);


// },2000)


 

// console.log('hello world')



// let student ={
//     name:'ravi',
//     surname:'sahani',
//     age:28,
// }

// const studentclear=setTimeout(()=>{
//     console.log(student);
// },3000)

// clearTimeout(studentclear); /// settimeout rokne ke liye cleartimeout() without variable 

// console.log('clear student');


//.. setInterval function...//// 
// * setinterval function used for if i want to some sepcific function called multiple time.
// * clearinterval() stop for setinterval function.

let b=setInterval(timesecond,2000)

let sec = 0;

function timesecond(){
    sec++;
    console.log(sec);
    const  date = new Date().toTimeString();

    console.log(date)

    if(sec == 10){
        clearInterval(b);
    }
}

