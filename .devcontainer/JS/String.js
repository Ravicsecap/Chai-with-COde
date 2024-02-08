
// string delclare two types 1) direct and 2) used new keyword.
// chechks for string object     ..........console.log(var_name.__proto__)
// in modran day programma use backlit and this symbol ${}.

// // 1) type
// const gameName = `hello`;

// console.log(gameName);
// // 2) type

// const gameName2 = new String(`hello`);

// console.log(gameName2);

/********************************************* IMP STRING METHOD IN JS******************************************/

const someMethod = new String(` Ravi sahani   `);

console.log(someMethod.trim()); // remove for white space

console.log(someMethod.length); // reture to total number string charcter

console.log(someMethod.charAt(2));  // used for elements

console.log(someMethod.indexOf(`v`, `a`));  // used for index postion

console.log(someMethod.substring(0 , 6)); // used new substring only take postive value , its take 2 arguments subtring(star_index,end index)

console.log(someMethod.slice(1,4)); // used for new substring same as substring its take negative value on start index

console.log(someMethod.includes(` `));  // used charter have or havn't

console.log(someMethod.split()); // strinf to array

console.log(someMethod.replaceAll(`a`,`K`)); // used for charcter replace




