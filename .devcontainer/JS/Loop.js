
// loop is a block scope and first initial, condition , print , update 

for (let index = 0; index < 10; index++) {
    const element = index;

    console.log(element);

      
}

// i can used for same varible just because loop and condition statment is a block scope 
// select multiple value ctrl+D

 for (let i = 0; i < 10; i++) {
     
    //  console.log(i);
     if (i === 5) 
     {
         console.log(`5 is a greater number `);
        }
      console.log(i); 
    
 }

 // nested loop

 for (let i = 0; i <=10; i++) {

    console.log(" ");

   for (let j = 0; j <=10; j++) {
        //    console.log(j);
        //    console.log(`${i} * ${j} = ${i*j}`)
    
   }     

 }

 const super_Heros =["shaktiman", "junior-G", "HE-MAN"]

 for (let i = 0; i < super_Heros.length; i++) {
    const element = (` My Heros :- ${super_Heros[i]}`)

    console.log(element);
    
 }

 for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)

    if(element == 5){
        console.log(`5 is greater number`);
        // break

        continue

    }
    
 }

 // break key word use for condition flow achive then code existing 
 // continues  skip one time condtion then allow
