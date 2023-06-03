type technologiesType = {
    id: number,
    title: string

}


type studentType = {
    id: number;
    name: string,
    age: number,
    isActive: boolean,
    address: {
        streetTitle: string,
        city: {
            title: string,
            countryTitle: string,
        }
    }
    technologies: Array<technologiesType>
}


export let student: studentType;
student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: true,

    address: {
        streetTitle: "Lenina 4",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ],
}

// Tasks 2
type typeOfHouses = {
    id?: number
    buildedAt: number;
    repaired: boolean;
    address: {
        number: number;
        street: {
            title: string;
        }
    }
}

type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION";
    budget: number;
    staffCount: number;
    address: {
        street: {
            title: string
        }
    }
}

export type CityType = {
    title: string;
    houses: Array<typeOfHouses>
    citizensNumber: number
    governmentBuildings: governmentBuildingsType[]
}


export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
    city.houses = city.houses.filter((el) => el.address.street.title != title);
}


export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<governmentBuildingsType>, staffCount: number) => {
   return  governmentBuildings = governmentBuildings.filter((el) => el.staffCount > 500);
}



