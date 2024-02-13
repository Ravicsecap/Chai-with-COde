
// function: is a set of instruction perfrom on some specfic task by user.
// every  time retrun. retrun is a keyword and if wirte retrun keyword then after other line cant excuted by interpiter.
// i am passed parameter and i cant paased any arguments  thats time o/p:> UNDIFINED
// we can passed default argument as parameters  if i cant not passed arg. if passed arg. than default  arg override ..used for avoid undifined output
// undifined :> false , " ":> false , !undifinded:> true( != means input true :> then output false or vise-versa)
// specfication: readable,avoid duplicate, decrese length of code, future modification
// create a function :> function myfunction(){//str} myfuction:> refer address , myfunction():> excution
// function store inside heap memory then spereate two phase frist create and excuation phase.

function userName(a){

    return `${a} , is logined`  // string interpolation
}

let a=userName("upsccse1996@gmail.com")
console.log(a);


function userName(a){

    return `${a} , is logined` 
}

let b=userName() // retrun undefined output
console.log(a);
