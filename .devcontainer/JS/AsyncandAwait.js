
// ********************** Async &  Await promise callback function ******************************************//
// * Async & Await  kwy word use before a function can be created a async function 
// * same as promise but its pro version or good way Asyncoronus operation handle by async and awit way
// * there are threre block try and catch nonother finally block.

 //* example frist
async function getchesse(chesse) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(console.log(`order one pizza with cheese. `))

        }, 0);

    })

}


async function makeDough() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // const chesse = "mojrella chesse"
            resolve(` ${chesse} `)

        }, 2000);

    })

}



async function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // const flavour = "garlic"
            resolve(`console.log(pizza ready wth  ${dough})`)

        }, 2000);

    })

}


async function orederPizza() {

    try {


        const process_1 = await getchesse();

        console.log(`'now we have', ${CHEESE}`)

        const process_2 = await makeDough(chesse)

        console.log('now your cheese', dough);

        const process_3 = await makePizza(dough)

        console.log('now we have');

        // return pizza;

    } catch (e) {
        console.log(e);
    }


}

orederPizza();
//     .then((pizza) => {
//         console.log(pizza);
// //     })


/// example 2

// consider one order taking and other men work some pepole work in kitchen.

// let ordertaking =(a)=>{
//     return new Promise( (resolve,reject) => {
//         setTimeout(() => {

//             const cheese ='chesse'

//             resolve(console.log(`what do want sir.`))
            
//         }, 3000);
//     })
// }

// async function kitchen(){

//     console.log('one man diss cleaning');

//     console.log('one man table cleaning');

//     console.log('one man food makinging');

//     await ordertaking ("HELLO WORLD" ); // async  after wait all bottom async bracket last excuted


//     console.log('one man other order takinging'); // async 



// }

// kitchen();  /// imp calling

// console.log('counter man billing');

// console.log('somthing working')