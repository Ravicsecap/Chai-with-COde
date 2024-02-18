// map is same as filter but its not need any condition 
// mostly used for performing  on element like addition  subtraction  and etc
// we used more than method over method 


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const a = num.map((item) => item * 10)
    .map((item) => item + 1)
    .filter((item) => item == 61)


    console.log(a);



    const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);