
// today content :> THIS Keyword ARROW FUNCTION
// context means values
// this keywords used for current context or normally life said current scenario's.
// this keyword used for specailly object attributes refer address 
// window is global object thats y i can used DOM manipulation

// example :-

const shopping_mall = {
    mall_name:"High_Life",
    shop_address:"Santacruz_west,Mumbai,Pincode - 400054",
    floor:"1st Floor near by quTO Building",
    welcome: function(){ 
        
        console.log(`${this.mall_name},AAp la sawagt Hai.`);
        console.log(this);  // retrun current obj. show all attributes
    }
        
}

// shopping_mall.welcome();
// console.log(this); // outside of object only show empty object {}
// shopping_mall.mall_name="Phonix Mall";
// shopping_mall.welcome();


const username = () =>{

    let name = "ravi";

     console.log(this.name); // undifend
    console.log(this)

}

console.log(username()); // retrun undifend

console.log(this) // empty object


// Arrow function
// syntax:- () => { retrun keyword} ,[immplsitive Arrow function :  () => (  ) , for object => ( ) => ( { })


//1) let userName = () => {

//     return `hello my name is ravi`;
// }

//  2)console.log(userName);

let addTwoNumber =(num1,num2) =>  num1 + num2;

console.log(addTwoNumber(3,4));


let shop_details = ({shop_name:"kirana store, shop_phoneno.:986525656"})

const{shop_name:name}=shop_details  // de-structured 

console.log(shop_details.name);






