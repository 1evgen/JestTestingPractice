import {drinkAll, noBoringZeros, squareNumber, trainingCallbackFunction} from "./tasks";
import {json} from "stream/consumers";

test('number should be without zero the end', ()=> {
    let num = 1000
    let result = noBoringZeros(num)
    expect(result).toBe(1)
    expect(noBoringZeros(90)).toBe(9)
    expect(noBoringZeros(-100)).toBe(-1)
    expect(noBoringZeros(101)).toBe(101)
    expect(noBoringZeros(83)).toBe(83)
    expect(typeof result).toBe('number')

})


test('cheak null and undefined', ()=> {
    let x = null;
    let z = 1;
    expect(x).toBeNull()
    expect(z).not.toBeNull()
})

test('check contain array', ()=> {
    let arr = [
        'milk', 'coffee', 'apple', 'banana', 'strawberry'
    ]
    expect(arr).toContain('coffee')

})

describe('drinkAll', ()=> {
    test('drink something lemon-flavoured', ()=> {
        const drink = jest.fn()
        drinkAll(drink, 'apple')
        expect(drink).toHaveBeenCalled()
    })
    test('does not drink banana-flavoured', ()=> {
        const  drink = jest.fn()
        drinkAll(drink,'banana')
        expect(drink).not.toHaveBeenCalled()
    })

})

describe('trainingCallbackFunction', ()=> {

    test('test callback square number from array', ()=> {
        let array_1 = [1,2,3,4,5]
        let array_2 = [1,2,-2,3,2]
        function callback(num: number){
            return Math.pow(num, 3)
        }
        let result = trainingCallbackFunction(array_1, squareNumber);
        let result_2 = trainingCallbackFunction(array_2, callback)

        expect(result).toEqual([1,4,9,16,25])
        expect(result).toContain(9)
        expect(trainingCallbackFunction(array_1, callback)).toEqual([1,8,27,64,125])
        expect(result_2).toEqual([1,2,-2,3,2])
    })
    test('test call function callback', ()=> {
            const callback = jest.fn()
            let array_1 = [1,2,3,4,5]
            trainingCallbackFunction(array_1, callback)
            expect(callback).toHaveBeenCalled()

    })
})
