
// control flow statement  is a logical statement  and used for control ur own code. its is good apporach.
// frist "IF CONDITION :> ONLY BLOCK OF SCOPE  CODE RUN IF CONDTION IS "TRUE" "
// Important operater like <,>,<=,>=,!=,==,===,!==

//If Condtion example 

// const isLight = "on";

// if (isLight == "on") 
// {
//    console.log("yes");    
// }

// const chaiandcode = "good teacher";

// if(true){
//     console.log("ha kyu mahi");
// }

// const banana = 100;
// if(banana <= 50){
//     console.log("ha jyadha hai")
// }

// const number  = "4568"
// if (number === 45) {

//     console.log(`Ha`)

// }else{
//     console.log(`kya huaa`);
// }
    

// impalsitive if condition  mean in one line  without cruly bracket {}

const tem = 40;
// if(tem > 20) console.log("yup, Garami jyadha hai ");


///  ***************** multiple condition*********************************////

// 1) basic else if condition 
// how to check  u know that if is true then block will be executed or skip that next block else if other wise else block will be obse excuted.

const balance = 1000;

if(balance < 500){
    console.log("less than ");
}else if(balance <955){
    console.log("less than balance");
}else if(balance > 500){
    console.log("yup");
}else{
    console.log("otherwise balance amt bigger number");
}

// imp things most of use if both conditions  are must be true that time used [AND operater]
// example :- i create login  need username and passw

const userName = true
const password = true

if(userName && password){
    console.log("please logged password and username is right");
}else{
    console.log("something Worng");
}

// other one imp OR operater if used for ether than or than mean u give two condition one must be true 
// example:- i create flipkart shop app i can logging  user name or phone no

const username = true;
const phone = true;
const email_id = false;

if(username || phone || email_id ) console.log("yes its ur flipkartpags Here");
