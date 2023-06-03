
const agePeople: Array<number> = [18,14,21,19,32];

const predicate = (age: number) => {
        return age >= 18;
}


type typeCourse = {
        title: string
        price: number
}

 export let goodPrise: Array<typeCourse> = [];
export  function findNormalPrise (array: Array<typeCourse>) {
  return  goodPrise = array.filter((elem) => elem.price <= 500);
}



type typeArrayStudents = {
    id: number;
    name: string;
    notes: Array<number>

}

export function getStudentTopNotes(students:Array<typeArrayStudents>) {
    let result = students.map((el)=> el.notes);
}


// getStudentTopNotes([
//     {
//         id: 1,
//         name: "Jacek",
//         notes: [5, 3, 4, 2, 5, 5]
//     },
//     {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//     },
//     {
//         id: 3,
//         name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//     }
// ]);