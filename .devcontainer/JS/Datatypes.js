
// THERE ARE PRIMITIVE OR NON-PRIMITVE DATATPES //

// NULL IS DATATYPES BUT JS CONSIDER ITS IS OBJECT//

// alert() use for pop inside console//

//"use strict" mean new version code //

//1) Primitve Datatypes

/*
number => used for or store for all types of number. range 2 ** 53.
Bignit => used for larger  than larger number stored.
string => must be " " or ` ` inside any value consider string value.
boolean => return true or false.
null => its obej and standalone value.
undifined => only varibale name  and datatype declare  its mean empty value.
*/

let name = "Ravi sahani" // string bcus " "

let age = 25;  // number 

const Bday = "19/04/1996"; // string

const male = true; // boolean

console.table([name,age,Bday,male]);

/* 2)  NON-PRIMITIVE DATATYPES

Object =>  its say datatypes but its a collection of keys and values.
Array =>  its a object and collection of hetrogeous elements.
Date =>  its date constructor.
*/


let market ={shops:["fruit_shops", "fish_shops","vegetables_shops","flowers_shops"]}; // array and object

console.log(`All shops => ${market.shops}.length `);
console.table(`its frist shops => ${market.shops[1]}`);

