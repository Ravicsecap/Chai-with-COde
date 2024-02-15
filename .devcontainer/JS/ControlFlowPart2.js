
// Switch Case used for if key one check multiple condition i can used if else condition but Its is shorcut 
// Key :> Varible 

const month = 3;

 switch (month) {
    case 1:
        console.log("Its Jan");
        break;
 
    case 2:
        console.log("Its feb");
        break;
 
    case 3:
        console.log("Its March");
        break;
 
    case 4:
        console.log("Its April");
        break;
 
    case 5:
        console.log("Its May");
        break;
 
    default:
        console.log("invalid");
        break;
 }

 // interview  question :- break operator:- its used for control flow if cant write break other code will be executed note:- expect defualt.

 // if value is string 
 //example

 const months = "april";

 switch (months) {
    case "jan":
        console.log("Its Jan");
        break;
 
    case "feb":
        console.log("Its feb");
        break;
 
    case"march":
        console.log("Its March");
        break;
 
    case "april":
        console.log("Its April");
        break;
 
    case "may":
        console.log("Its May");
        break;
 
    default:
        console.log("invalid");
        break;
 }

 // trutty value:- "0", " ", "false" , [] , {} ,function(){}

 // how to check empty [] ,  empty{} 

 const shop_malls = []

 if(shop_malls.length === 0){
    console.log("empty Array");
 }

 const mobiles = {}

 if(Object.keys(mobiles).length === 0){
    console.log("object empty");
 }

 // falsy value:- 0, -0 , false , BIGNIT 0n, null , undifined, "",NaN

 console.log(null == -0);

 // nulsih colasan operator work is null and undifiend value avoid  purpose 

  let num

  num = null ?? 10 ;

  console.log(num)

  let value = null ?? "Hello" ?? 20;

  console.log(value);

  let value1 = null ?? undefined ?? 20;

  console.log(value1);

  // ternery oerator differ nulish colish operator

  const mobileprice = 1222222;

  mobileprice <= 80000 ? console.log("less than 80 k"):console.log("more than 80k");

