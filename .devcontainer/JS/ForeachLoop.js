
// most commanly used this loop 
// where used :- most comman if database fetch data will be provide array from like object of array means [{},{},{}......{} n of ] and [" "," ","",..n]
// for each() function its need call back function its have values , keys index , length

// example:- data have provided object of array i want elements

const pg_languages =[

    {
        language_name:"JavaScript",
        "file extension":"js",
    },

    {
        language_name:"Java",
        "file extension":"java",
    },

    {
        language_name:"python",
        "file extension":"py",
    },

    {
        language_name:"hyper text markup language",
        "file extension":"html",
    }
]

  pg_languages.forEach( (item, index) => (console.log(item.language_name)));
pg_languages.forEach( (index,index_number,array) => (console.log(index["file extension"],index_number,array)))
