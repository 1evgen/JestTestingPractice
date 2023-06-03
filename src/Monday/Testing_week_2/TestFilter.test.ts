import {findNormalPrise, getStudentTopNotes, goodPrise} from "./TestFilter";


test.skip('Need to find price less 500', ()=>{
    type typeCourse = {
        title: string
        price: number
    }
const course: Array<typeCourse> = [
    {title: "JS", price: 500},
    {title: "React", price: 800},
    {title: "Angular", price: 1000},
    {title: "HTML", price: 400},
    {title: "Angular", price: 1000},
    {title: "CSS", price: 1000},
];
    let result = findNormalPrise(course);
    let result_1 = findNormalPrise(course)
expect(result).toEqual([
        {title: "JS", price: 500},
        {title: "HTML", price: 400},
        ]
    );

    expect(result_1.length).toEqual(2)
})


