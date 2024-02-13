// scope is :>{}, this is scope but object { } :> declaration  of object isn't scope
// scope related with variables  keyword thats avoid var keyword just bcus function scope

// if(true){

//     const userName = "upsccse1996@gmail.com";
//     var password = 546859;
//     console.log(userName) // excuted normaly
//     console.log(password) 
// }
// console.log(password) // excuted both side inner scope and outer scope
// console.log(userName) // retrun error bcus i am accessed out of curly braces

// and more thing parent scope inherited child scope means accessed example below:-

if(true){

    const userName = "upsccse1996@gmail.com";
    var password  = 235689;

    if(userName == "upsccse1996@gmail.com"){

        let key1 = "RAV10256V"
        const amt = "10,000";

        console.log(userName); // run 
        console.log(key1); // run
    }
    // console.log(key1); // run
}
// console.log(key1);  // not run
// console.log(userName); // not run
console.log(password) // run 