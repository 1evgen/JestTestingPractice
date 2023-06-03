
export const Example_01 = (a: number,b:number) => {
    return (a + b);
}

export  const  multiplyNumbers  = (a:number, b: number) => {
    return a * b;
}

// Find max number in array
 export const findBigNumberInArray = (arr: number[]) => {
    let res = Math.max(...arr);
    return res;
};

export function reverseString(str:string){
    let res =  str.split('').reverse().join('');
    return res;
}

export const cubeChecker = (volume: number, side: number) => {
    if(Math.pow(side,3) === volume){
        return true;
    }else {
        return false;
    }
}

 export function showMinMax(arr: Array<number>) {
    return [Math.min(...arr), Math.max(...arr)]
}


