//Task №1
//Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
export const noBoringZeros = (n: number): number => {
        while (n % 10 === 0 && n !== 0){
            n /= 10
        }
    return n
}

export function drinkAll(callback: (flavour: string)=> void, flavour: string){
    if(flavour !== 'banana'){
        return callback(flavour)
    }
}

export const trainingCallbackFunction = (array: Array<number>, callback:(num: number) => void ) => {
        let newArray = []
    for(let elem of array){
        if(elem > 0){
            newArray.push(callback(elem))
        }else {
            return array
        }
    }
    return newArray
}

export function squareNumber(num: number){
        return num ** 2
}


