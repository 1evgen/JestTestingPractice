test('test for create deep clone object', () => {

    // 1. Simple object
    let man = {
        name: 'John',
        age: 28
    };
    let manFullCopy = {...man}  //  your code
    manFullCopy.age = 40;
    expect(manFullCopy.name).toEqual(man.name)
    expect(man.age).not.toEqual(manFullCopy.age)
////////////////////////////////////////////////////////////////
    let numbers = [1, 2, 3];
    let numbersFullCopy = [...numbers]

    numbers.push(4);

    expect(numbers.length).toEqual(4)
    expect(numbersFullCopy.length).toEqual(3)
    expect(numbers[numbers.length - 1]).not.toEqual(numbersFullCopy[numbersFullCopy.length - 1])
    /////////////////////////////////////////////////////////////////////////////////////////
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = {...man1, mother: {...man1.mother}}
    man1.mother.age += 1
    expect(man1.mother.age).toEqual(51)
    expect(man1FullCopy.mother.age).toEqual(50)
///////////////////////////////////////////////////////////////
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };
    let man2FullCopy = {...man2, friends: [...man2.friends]}
    man2FullCopy.friends.pop()

    expect(man2FullCopy.friends[man2FullCopy.friends.length - 1]).toEqual("Steven")
    expect(man2.friends[man2.friends.length - 1]).toEqual("William")
    expect(man2.friends.length).not.toEqual(man2FullCopy.friends.length)
///////////////////////////////////////////////////////
    // 5 Array of objects
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];
    let peopleFullCopy = [...people, ...people.map((el) => ({...el}))]
    let newPeople = {name: "Egor", age: 24}
    let addNewPeople = [...people, newPeople]


    expect(Array.isArray(people[0])).toEqual(false)
    expect(Array.isArray(peopleFullCopy[0])).toEqual(false)
    expect(peopleFullCopy instanceof Object).toEqual(true)
    expect(people[2].age).toEqual(peopleFullCopy[2].age)
    expect(addNewPeople[0].name).toEqual("Peter")
    expect(addNewPeople.length).toEqual(4)
    expect(people.length).not.toEqual(addNewPeople.length)

/// not deep clone
    let people2 = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];
    let p = [...people2]
    p.map((el) => el.name += '!')
    expect(people2[1].name.slice(-1)).toEqual("!")

    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };
    let man3FullCopy = {
        ...man3,
        friends: [...man3.friends.map((el) => ({...el}))]
    }
    man3.friends[0].age = 35

    expect(man3FullCopy.friends.length).toEqual(3)
    expect(man3FullCopy.friends[0] instanceof Object).toEqual(true)
    expect(man3.friends[0].age).not.toEqual(man3FullCopy.friends[0].age)
    expect(man3.friends[0].age).toEqual(35)
    expect(man3FullCopy.friends[0].age).toEqual(30)

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
    let man4FullCopy = {...man4,
        mother: {...man4.mother,
        work: {...man4.mother.work}
        }}
    man4FullCopy.mother.work.position = 'student'

    expect(man4FullCopy.mother.work.position).toEqual('student')
    expect(man4.mother.work.position).toEqual("doctor")


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
    let newParents = {name: "Lida", age: 17}
    let man5FullCopy = {...man5,
    mother: {...man5.mother},
        work: {...man5.mother.work},
        parents: man5.mother.parents.map((el)=> ({...el}))
    }

    let addParentMan5 = {
        ...man5,
        mother: {
            ...man5.mother,
            parents: [...man5.mother.parents, newParents]
        }
    }

    expect(man5.mother.work.experience).toEqual(man5FullCopy.work.experience)
    expect(man5.mother.parents.length).toEqual(2)
    expect(addParentMan5.mother.parents.length).toEqual(3)

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
    let man6FullCopy = {
        ...man6,
        mother: {
            ...man6.mother,
            work: {
                ...man6.mother.work
            },
            parents: man6.mother.parents.map((parent) => ({
                ...parent,
                favoriteDish: {
                    ...parent.favoriteDish
                }
            }))
        }
    };
    man6FullCopy.mother.parents[0].favoriteDish.title = "cake"
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toEqual("cake")
    expect(man6.mother.parents[1].favoriteDish.title).toEqual('sushi')
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

    let man7FullCopy = {...man7,
        mother: {...man7.mother},
        work: {...man7.mother.work},
        parents: man7.mother.parents.map((p)=> ({...p, favoriteDish: {...p.favoriteDish,
            ingredients: p.favoriteDish.ingredients.map((i)=> ({...i}))}}))
    }

       man7FullCopy.parents[1].favoriteDish.ingredients[0].title = 'meet'
    expect(man7.mother.parents[1].favoriteDish.ingredients[0].title).toEqual("fish")

})



