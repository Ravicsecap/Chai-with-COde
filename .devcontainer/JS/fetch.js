///////  ************  Fetch Api ************////////

// * before fetch api our used XML , HTTPS there are some problem.
//  * avoid for used right now fetch api.
//  * this is serve data server side.
//  * handle by promise() in js.
//  * its return promise. ( bcus going to server , inclued some time that handle fetch api by promise().)
//  * mostly used async n await  but we can handle by then and catch

// * example by then and catch block

// const fetchresonse = fetch(`https://dummyjson.com/docs/products#products-all`)

// //   console.log(fetchresonse) // return promise
// .then((fetchresonse) =>{
//     console.log(fetchresonse);  // retrun data 

// })
// .catch((error)=>{

//     console.log(error)   // error handling

// })


// * common used Async and Await

// 



async function fetchData() {

    try {
        const response = await fetch('https://dummyjson.com/products/add')

        console.log(response);

        // const jsonData =  response.json(); //   just bcus we r not use await function thats y return promise

        // console.log(jsonData)


        const jsonData = await response.json(); //   response is object and json ,text its function

        console.log(jsonData)

    } catch (e) {


        console.log(e);
    }
}


fetchData();
