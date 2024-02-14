
// Single_ton Object Syntax:-

const key1 = Symbol("RAK1023KI")

const Bankacc = new Object({name:"ravishekhar Sahani",age:18,[key1]:key1});

// console.log(Bankacc[key1]);

// literal Object Syntax:-

const Authentication =  Symbol("12345df")

const Bankacc2 ={
    name:"ravishekhar Sahani",
    "full add":"Room no. 51/2/3,Khar-Dand ,Santacruz-West",
    login_ID:{
        user_name:"upsccse1996@gmail.com",
        frist_name:"Ravi",
        last_name:"Sahani",
        password:123456789,
        Account_info:{
            [Authentication]:Authentication, 
            Bank_Balance:"25,000",
            minimum_Balance:"10,000",
       }
       
    }
    

}

onsole.log(Bankacc2.login_ID.Account_info[Authentication]); // how to symbol call in object 

//  let all_object ={Bankacc,Bankacc2}  // merge  type 1

// let all_object ={...Bankacc, ...Bankacc2}  // type 2


// let all_object =Object.assign({},Bankacc,Bankacc2) // type 3


// console.log(all_object);

console.log(Object.keys(Bankacc)); // Object.keys(object _name)

console.log(Object.Values(Bankacc));  // retrun Object.values(Object_name)

console.log(Object.entries(Bankacc));  // retrun Object.entries(Object_name)

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // retrun boolean value value have or havnt

// De-structure of object 

let shoping_details = ({shopping_mall:"Hi, Life ", Mall_phone: 986565455})

const {shopping_mall:name } = shoping_details
const {Mall_phone:mobile } = shoping_details

console.log(mobile);
 console.log(name);