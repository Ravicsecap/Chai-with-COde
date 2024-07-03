

//************   PROMISE    *************** */

// * PROMISE() is a good ways to handle Async operation.
// * same as callback() function but little bit difference is a we avoid call hell structure.
// * there there state :-
// * pending = operation isnt completed (retrun new promise).
// * fullfiled = operation completed (.then( ){} block).
// * rejected = some errror occurres  (.catch( ){} block).
// * promise take two arg and one function like resolve and reject 
// *.then() and .catch()  function

// after promise function store in container then used .than and catch block


// example  


//   let pizzaPromise = orderPizza();

//   console.log(pizzaPromise);

//   let orderPizza =() =>{
//     return new Promise( (resolve ,reject)=>{
//       setTimeout(() => {

//         const pizza='pizza';
//         resolve(pizza)

//       }, 2000);
//     })
//   }

// //   let pizzaPromise = orderPizza();
//   pizzaPromise
//   .then((pizza) =>{
//     console.log(`please have ur ${pizza}`)
//   }).catch(error =>{
//     console.log('sorry')
//   })


// let see other example....

// i want to book ticket = open website = 2sec
//  click from  = 2sec
//  fill infrom = 5sec
//  confrim   =   2sec
//  payment =   2sec
//  booked ur ticket = 2sec





// let bookedYourTicket = () => {

//   openWebsite
//    .then((g) => {
//     console.log(`Welcome on ${website}`);

//   })

//   fillYourInfromation.then((name, age, gender) => {

//     console.log(`My infromation is ${name},${age},${gender}`);

//   })

//   paymentMode.then((rupess) => {
//     console.log(`Your total amount will be ${rupess}`);

//   })

// }



// let openWebsite = (website) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const website = 'www.irctc.com';
//       resolve(website);


//     }, 2000);



//   })
// }

// let fillYourInfromation = (name, age, gender) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const infromation = `${name, age, gender}`;

//       resolve(infromation);


//     }, 5000);



//   })
// }


// let paymentMode = (rupess) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const rupess = `${rupess}`;
//       resolve(rupess);


//     }, 2000);



//   })
// }

// let ticket = bookedYourTicket();
// console.log(ticket)


/// **********Same Example**************///

// shop function =  recvied the order = 0sec
//                      cute the fruit = 2sec
//                      Add water and ice = 1sec
//                      start the machine = 1sec
//                      select Container = 2sec
//                     

let stock ={
  fruits:['watermelon','mangoes','kiwi','banana'],
  liqiued:['water','ice'],
  container:['cone','stick','glass'],
}

// build the rltn for order and work

let shop_open = true;

let order = (time , work) => {
  return new Promise( (resolve , reject) => {
    if (shop_open) {
      setTimeout(() => {

        resolve(work ());


        
      },time);
      
    } else {

      reject(console.log('our shop is closed'))

    
    }
   
  })

}

order(2000, ()=> console.log(`${stock.fruits[0]} ice-cream selected`))
.then( () =>{
  return order( 0 , ()=> console.log(`Production has started`)) // s/g line is not requied curly braces
})


.then( ()=>{
  return order ( 2000 , () => console.log(`Add some ${stock.liqiued[0]}`))
})


.then( () =>{
  return order ( 2000 , () => console.log(`Under the Machine mix - up`))
})

.then( () =>{
  return order(1000, ()=> console.log(`sarve with ${stock.container[0]}`))
})

.catch( ()=>{

  console.log('I really sorry SHOP CLOSED')

})
.finally( () =>{
  console.log("Day ended , shop is closed")
})