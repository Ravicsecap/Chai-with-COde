
// rest operator :> syntax(...value_name)
// how to passed object
// how to passed Array 

// if i create shopping cart and paased one para. but arg or value n number of that time used rest operator same as spred operator

// function createMyShoppingCart(...num1){

//     return num1
// }

// console.log(createMyShoppingCart(200,400,500,600));  //[200,400,500,600]

// if i am passed some parameter that time number of parameters cover as arg. other arg inside array just bcus rest opperator

function createMyShoppingCart(values1,values2,...num1){

    console.log(`${num1}, cart prices item`);

    return num1
}

console.log(createMyShoppingCart(200,400,500,600)); // [500,600]

// passed object inside function

const shoppingMall ={

    "Mall Name":'High Life',
    Adrress:"S'cruz-West,Mumbai,pincode - 400054",

}

function passedObject(anyObject){

      return `${anyObject["Mall Name"]}  and address is a ${anyObject.Adrress}`

//    console.log(`${anyObject["Mall Name"]}  and address is a ${anyObject.Adrress}`);
}

console.log(passedObject(shoppingMall));

// passed Array inside function

const items = ["oil","rice","vegii","masala","etc......"]

function wantTOMasala(myArray){
    return myArray[3]
}

console.log(wantTOMasala(items))
