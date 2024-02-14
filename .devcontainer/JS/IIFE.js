
// immediately  invoked function exction 
// purpose:- used for IIFE and coonect for DATABASE file excucation
// two type of iife function [ name or without name mean normal function and arrow function]
// every function end with semi colon [;] must be
// () :> function Defination, ():>Wrap to the Function , ():> Excution of function

// i.e

(function chai(){

    console.log("ravi shekhar ");
}) ();



( (num1,num2) => {

    return num1+num2  // explsitive Arrow Function IIFE

}) 

console.log((2,4));

( (num1 , num2) => (num1+num2))  // Impalsitive Arrow Function IIFE

console.log((2,4));