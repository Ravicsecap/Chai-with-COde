
//.... call back and call hell ... //
// * Callback function is a its a function but pass as paraneter to othwer function.
// * this call back function create a chain to known as call hell or call aka
// * Call back function build rltn between two function


// ******* CALL BACK FUNCTION *********//

//  let fun1 = (call_fun2) => {

//     console.log('step 1 print');

//     call_fun2(); // as function passed by parameter

//  }


//  let fun2 = () => {

// console.log('step 2 print');

//  }


//  fun1(fun2);


//  //********  Async Call Back Function************* */

//  // * settimeout() => two argument => arrow function , millisecoand.

//  let mainWay = (call_shortCutWay) => {

//     setTimeout(() => {

//         console.log('i walk main way thats y late print')

//     },3000);




//     call_shortCutWay();
//  }


//  let shortCutWay =() =>{

//     setTimeout( ()=>{
//         console.log('i walk short cut way thats way frist print ')
//     },0)

//  }

//  mainWay(shortCutWay);


// * simple example how to rlt build Async call back function
// * if i am order ice cream the two main process [frist order function and secoand  shop function].
// order function = place order =2sec

//  // shop function =  recvied the order = 0sec
//                      cute the fruit = 2sec
//                      Add water and ice = 1sec
//                      start the machine = 1sec
//                      select Container = 2sec
//                      select Toppings = 3sec
//                      serve ice cream = 2sec


// let stock = {

//     fruits: ['staberry', 'watermelon', 'mangos', 'mix-fruit', 'cherry'],
//     topping: ['cherry', 'chocalte', ],
//     container: ['cone', 'cup', 'stick'],
//     liqued:['water ' , 'ice'],
// }

// let order = ( f, a, icecreamorder) => {

//     setTimeout(() => {

//         console.log(`${stock.fruits[f]}  with ${stock.topping[a]} `);


//         icecreamorder();
//     }, 0)



// }

// let icecreamShop = () => {

//     setTimeout(() => {

//         console.log('recived your order')

//         setTimeout(() => {

//             console.log(` Add some ${stock.liqued[1]}`);

//             setTimeout(() => {


//                 console.log('inside the machine mix-up all ingridines');

//                 setTimeout(() => {

//                     console.log(`${stock.container[2]}`);

//                     setTimeout(() => {

//                         console.log(`${stock.topping[0]}`);

//                         setTimeout(() => {

//                             console.log('Ready your ice-cream');
//                         }, 2000);

//                     }, 3000);

//                 }, 2000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }

// order( 0, 1 ,icecreamShop);




//* Arrow structure is a call hell and avoid for call hell WE are using [Promise() function]



// ********* other example order pizza *******///

let time = 7;
let student = 0;

let schoolroutine = (schoolprocess) => {
    schoolprocess();

    setTimeout(() => {

        console.log('School time 7 am after late punisment')

    }, 0);
}


// let students = () => {

//    setInterval(() => {

//     for (let i = 0; i <= 5; i++) {

//         student++;
//         break;

//         if(time == 7){

//             console.log('sorry you are late');

//         }

        
//     }

    
//    }, 1000);
// }

// schoolroutine(students);




