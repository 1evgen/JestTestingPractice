import {} from "./Exercises.test";

export function toArray(num: number) {
    let str = num.toString();
   let array = str.split('');
        let newArray = array.map((el) => parseInt(el))
        return newArray;
}

export function toNumber(arr: Array<number>) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += arr[i];
    }
    return parseInt(str);
}


export function spelling(str:string) {
    let arr = [];
    let strValue = '';
    for(let i = 0; i < str.length; i++){
       strValue += str[i];
       arr.push(strValue)
    }
    return arr
}


export const creatCloneArray = (arr:Array<number> | Array<string> ) => {
    let newArray = [arr,...arr];
    return newArray;
}


type  townType = {
    city: string,
    street: string,
    countPeople: number,
    work: boolean
}


export const countryDreams = (town:Array<townType>) => {
    return     town.map((el)=> el.street)

}

type greetings = string

export function validateHello(greetings: greetings) {
    let arrlanguage = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'merhaba',  'czesc'];
    let upperString = greetings.toLowerCase();

    for(let elem of arrlanguage){
        if(upperString.includes(elem)){
            return true;
        }
    }
    return false;
}



