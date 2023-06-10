
export type userType = {
        name: string
        hair: number
        address: {city: string, house: number}
}
export type laptopType = {
    title: string
}
export type UserWithLaptopType = userType & {
    laptop: laptopType
}

export type userWithBooksType  = userType & {
    books: Array<string>
}

export type companiesType = {id: number, title: string}
export type WithCompanies = {
    companies: Array<companiesType>
}

export const moveUserToOtherHouse = (user: UserWithLaptopType & userWithBooksType, house: number, title: string) => {
     return (
         {
           ...user,
             address: {...user.address, house},
             laptop: {...user.laptop, title}
         })}

   export const addBooks = (user: UserWithLaptopType & userWithBooksType, arr: Array<string>  )=> {
            return (
                {
                    ...user,
                    books: [...user.books, ...arr]
                })}


    export const updateBooks = (user: UserWithLaptopType & userWithBooksType, value: string, newValue: string)=>{
           return (   {...user,
                   books: user.books.map((el)=> el === value ?  newValue : el)})}

    export  const removeBook = (user: UserWithLaptopType & userWithBooksType, value: string,)=> {
        return (
            {...user,
                books: user.books.filter((el)=> el !== value)
            })}

export  const addCompains = (user: UserWithLaptopType & userWithBooksType & WithCompanies, value: companiesType )=> {
    return (
        {...user,
           companies: [...user.companies, value]
        })}

export  const fixMistakeInTitle = (user: UserWithLaptopType & userWithBooksType & WithCompanies, value: string )=> {
    return (
        {...user,
            companies: user.companies.map((el)=> el.title === 'GooglA' ? {...el,title: value}: el)
        })}



// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man}  //  your code


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy  //  your code


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy // your code


// 4. Array of primitives inside an object
let man2 = {
   name: 'John',
   age: 28,
   friends: ["Peter", "Steven", "William"]
};

let man2FullCopy  // your code


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy  // your code


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy //  your code


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy //  your code

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy //  your code


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy  //  your code


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy  //  your code
