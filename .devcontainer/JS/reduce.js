// used for different different  values are comined get the s/g values or output.
// mostly used for shooping cart sub total
// there are two parameters accumulator, current value and intital value passed as 0 example

// i.e

const a = [1,2,3,4,5,6,7,8,9,10]

const b = a.reduce(  ( acc , num ) => {
    console.log(`${acc}  and ${num}`)

    return acc + num;
},0)

console.log(b);

// i.e

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
 // i want to total course price 


 const totalPRICEOFCOURSES = shoppingCart.reduce( ( acc, totalcoursesprice)  =>  acc+totalcoursesprice.price,0);

 console.log(totalPRICEOFCOURSES);