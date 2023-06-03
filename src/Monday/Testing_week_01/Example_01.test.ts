import {Example_01, reverseString, cubeChecker, showMinMax} from './Example_01'
import {multiplyNumbers} from './Example_01'
import {findBigNumberInArray} from './Example_01'


test.skip('Example_01 should be correct', () =>{
    const  a = 1;
    const  b = 2;
    const  c = 3;

const  result = Example_01(a,b);
const  result2 = Example_01(a,c);

expect(result).toBe(3);
expect(result2).toBe(4);
} )

test.skip('Check out function multiplyNumbers',() => {
    const a = 2;
    const b = 2;

    const result = multiplyNumbers(a,b);
    expect(result).toBe(4);

} )


test.skip('check max number in arrays', ()=> {

    let array_01 = [1,2,3,4,5,6,7,8];
    let array_02 = [20,34,2,12,83,12,11,1];
    let array_03 = [-12,-2,-2,-1,-333,0];

    const result_01 = findBigNumberInArray(array_01);
    const result_02 = findBigNumberInArray(array_02);
    const result_03 = findBigNumberInArray(array_03);

    expect(result_01).toBe(8);
    expect(result_02).toBe(83);
    expect(result_03).toBe(0);
})

let str_01:string;
let str_02:string;
let str_03:string;

beforeEach(()=>{
    str_01 = 'Hello';
    str_02 = 'Spartak FC'
    str_03 = 'Oleg'
    }
)

test.skip("need reverse string", ()=>{
    const result_01 = reverseString(str_01);
    const result_02 = reverseString(str_02);
    const result_03 = reverseString(str_03);

    expect(result_01).toBe('olleH');
    expect(result_02).toBe("CF katrapS");
    expect(result_03).toBe("gelO");
})


test.skip('checked cub', ()=> {

    const number_1 = 3;
    const volume_1 = 27;
    const number_2 = 5;
    const volume_2 = 125;
    const number_3 = 6;
    const volume_3 = 121;

    let result = cubeChecker(volume_1,number_1);
    let result_1 = cubeChecker(volume_2,number_2);
    let result_2 = cubeChecker(volume_3,number_3);

    expect(result).toBe(true);
    expect(result_1).toBe(true);
    expect(result_2).toBe(false);


})







test.skip('To need find min and max numbers', ()=> {

    const arr_1 = [2,3,56,7,22,65,33]
    const num_01 = [2,65];

    const arr_2 = [123124234, 2]
    const num_02 = [2,123124234]
    const arr_3 = [0,0,0, -1]
    const num_03 = [-1, 0];


    let result_01 = showMinMax(arr_1)
    let result_02 = showMinMax(arr_2)
    let result_03 = showMinMax(arr_3)

    expect(result_01).toEqual(num_01);
    expect(result_02).toEqual(num_02);
    expect(result_03).toEqual(num_03);
})