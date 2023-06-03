import {countryDreams, creatCloneArray, spelling, toArray, toNumber, validateHello} from "./Exercises";
import {match} from "assert";

test.skip("pull out number from array", () => {

    let array_01 = [1, 2, 3];
    let array_02 = [8, 3];
    let array_03 = [-3, 2];

    let result_01 = toNumber(array_01);
    let result_02 = toNumber(array_02);
    let result_03 = toNumber(array_03)

    expect(result_01).toEqual(123);
    expect(result_02).toEqual(83);
    expect(result_03).toEqual(-32);
    expect(typeof result_03).toBe("number");

})

test.skip('should insert in array all numbers', () => {
    let num_01 = 2345;
    let num_02 = 123456;
    let num_03 = 0;
    let num_04 = 83;

    let result = toArray(num_01);
    let result_01 = toArray(num_02);
    let result_02 = toArray(num_03);
    let result_03 = toArray(num_04);


    expect(result).toEqual([2, 3, 4, 5])
    expect(result_01).toEqual([1, 2, 3, 4, 5, 6])
    expect(result_02).toEqual([0])
    expect(typeof result_03[0]).toEqual('number');
    expect(typeof result_03[1]).toEqual('number');

})

test.skip('array do', () => {

    let str_01 = 'Hello';
    let str_02 = "hi";

    let result = spelling(str_01);
    let result_01 = spelling(str_02);

    expect(result).toEqual(['H', 'He', 'Hel', 'Hell', 'Hello']);
    expect(result.length).toEqual(5);
    expect(result_01).toEqual(['h', 'hi'])
})


test.skip("should creat clone outside array", () => {
    const array_1 = [1, 2, 3, 4, 5];
    const array_2 = ['a', 'b'];
    const array_3 = [83];

    let result_1 = creatCloneArray(array_1);
    let result_2 = creatCloneArray(array_2);
    let result_3 = creatCloneArray(array_3);

    expect(result_1.length).toEqual(6);
    expect(result_1).toEqual([1, 2, 3, 4, 5, [1, 2, 3, 4, 5]]);
    expect(result_2).toEqual(['a', 'b', ['a', 'b']]);
    expect(typeof result_3).toEqual('object');

})


// type ArrayTown = {
//     id:number,
//     name: string
//     street: string,
//     countPeople: number,
//     isWorkInTown: boolean
// }


test("map all name in towns", () => {

    const town_01 = [
        {
            city: 'New York',
            street: 'Red Square',
            countPeople: 10000,
            work: true
        },
        {
            city: 'Boston',
            street: '1243-LN-Street',
            countPeople: 30000,
            work: true
        },
        {
            city: 'Moskov',
            street: 'Lenina',
            countPeople: 323,
            work: false
        },
    ]

    let result = countryDreams(town_01)
    expect(result).toEqual(['Red Square', '1243-LN-Street', 'Lenina'])

})


test("find word hello in different language", () => {
    const a = "Hallo, Gans. Wo bist do"
    const b = " Hello, my boy. would  you like to jerk me off ?"
    const c = 'merhaba, hos geldiniz!'
    const d = "Шо ты гоЛова";


    let result_a = validateHello(a);
    let result_b = validateHello(b);
    let result_c = validateHello(c);
    let result_d = validateHello(d);

    expect(result_a).toEqual(true);
    expect(result_b).toEqual(true);
    expect(result_c).toEqual((true));
    expect(result_d).toEqual(false)

})


test('check link common array ', () => {
    const arrayFriends = ['Anna', 'Anton', 'Nikolay'];
    const newFriends = 'Igor';

    const user_01 = {
        name: 'Svetlana',
        age: 21,
        friends: arrayFriends
    }
    const user_02 = {
        name: 'John',
        age: 29,
        friends: arrayFriends
    }

    const result = user_02.friends.push(newFriends)
    expect(arrayFriends.length).toBe(4)
    expect(user_02.friends[3]).toEqual('Igor')
})

test('test sort object', () => {
    const arrayStudent = [
        {
            name: 'Igor',
            age: 21,
            ball: 77
        },
        {
            name: 'John',
            age: 29,
            ball: 66
        },
        {
            name: 'Svetlana',
            age: 21,
            ball: 89
        },
        {
            name: 'Olga',
            age: 19,
            ball: 45
        },
    ]
    let filteredStudent = arrayStudent.filter((el) => el.ball > 66)
    let sortArrayStudents = arrayStudent.sort((a, b) => b.ball - a.ball)

    let newStudent = {
        name: 'Li',
        age: 18,
        ball: 36
    }
    arrayStudent.push(newStudent);

    expect(filteredStudent.length).toBe(2)
    expect(arrayStudent[0].ball).toBe(89)
    expect(sortArrayStudents[sortArrayStudents.length - 1].ball).
    toEqual(Math.min(...arrayStudent.map((el) => el.ball)))
    expect(sortArrayStudents[sortArrayStudents.length-1].name).toEqual('Li')
    expect(arrayStudent[0].name).toEqual('Svetlana')
})