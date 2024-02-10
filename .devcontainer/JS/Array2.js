
// imp array method concat(),spred(...elements,...elements,), flat(), isArray(), from(), of().

// merge more than one array retrun new array

const marvel_heros = ["spider_man","iron_man","hulk","black_window"];

const DC_heros = ["super_man","Bat_man","cyborg","flash"];

console.log(marvel_heros.concat(DC_heros));

// spred method same

console.log([...DC_heros,...marvel_heros]);

// its retrun one array in depth use only or passed Infnity keywords example

const super_heros = ["spider_man","iron_man","hulk","black_window",["super_man","Bat_man","cyborg","flash"],[1,[1,2],0]];

const allSuperHeros = super_heros.flat(Infinity);

console.log(allSuperHeros);
 console.log(marvel_heros[5][1]);

// retrun boolean value Array.isArray(argument)

const DC_heross = ["super_man","Bat_man","cyborg","flash"];

const arr = Array.isArray(DC_heross);

console.log(arr)

// retrun array Array.from()

const marvel_heross = "Ravishekhar"

console.log(Array.from(marvel_heross));

// retrun different values convert array

const a = 100;
const b = 200;
const c = 300;
const d = 400;

console.log(Array.of(a,b,c,d))












