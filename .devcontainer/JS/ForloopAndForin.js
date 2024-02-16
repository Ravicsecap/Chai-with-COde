
// Map() :> its object hold keys pair value and avoid duplicate value.

const a = new Map();
a.set("IN","INDIA");
a.set("US","UINTED OF AMERICA")
a.set("UAE","UNITED ARAB EMIRATES")
a.set("AU","AUSTRALIA")
a.set("US","UINTED OF AMERICA")

console.log(a);  //  object and avoid duplicate values

// for of loop mostly used for Array scanning not use for "OBJECT".

for (const [keys,values] of a) {

    console.log(`${keys} :- ${values}`)  // normal from avoid duplicate value
    
    
}
for (const keys of a) {

    console.log(keys)  // retrun array from avoid duplicate value
    
    
}

// forin loop used for mostly Object itteration

const pg_languages ={

    js:"Javascript",
    java:"Java",
    ph:"python",
    "swift ios":"Swift",
}

for (const keys in pg_languages) {

    // console.log(pg_languages[keys]);
    // console.log(keys);

    console.log(`${keys} => ${pg_languages[keys]}`);
   
}

// for in loop used for Array

const pg_languages1 =["Javascript","Java","python","Swift"];

for (const keys in pg_languages1) {
//    console.log(keys);      // index postion
    console.log(pg_languages1[keys]);
}