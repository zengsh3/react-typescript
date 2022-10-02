

type MR = {
    breakfast: Array<string>,
    lunch: Array<string>,
    dinner: Array<string>,
}

type MRD = {
    breakfast: object,
    lunch: object,
    dinner: object,
}

const dishes = require('../dishes.json');

function MealRestaurantDishes(dishes: any) {
    // console.log(dishes)
    let MR : MR = {
        breakfast: [],
        lunch : [],
        dinner :[]
    }
    let MRD : MRD = {
        breakfast: [],
        lunch : [],
        dinner :[],
    }

    for (let dish in dishes){
        console.log(dish)
        for (let key in dishes[dish]){
            let restaurant = dishes[dish][key]["restaurant"]
            let name = dishes[dish][key]["name"] 

            if (dishes[dish][key]["availableMeals"].includes("breakfast")){
                if (! MR["breakfast"].includes(restaurant)){
                    MR["breakfast"].push(restaurant)
                    MRD["breakfast"][restaurant]=[]
                }
                if (!MRD["breakfast"][restaurant].includes(name)) {
                    MRD["breakfast"][restaurant].push(name)
                }
            }

            if (dishes[dish][key]["availableMeals"].includes("lunch")){
                if (! MR["lunch"].includes(restaurant)){
                    MR["lunch"].push(restaurant)
                    MRD["lunch"][restaurant] = []
                }
                if (!MRD["lunch"][restaurant].includes(name)) {
                    MRD["lunch"][restaurant].push(name)
                
                }
            }
            if (dishes[dish][key]["availableMeals"].includes("dinner")){
                if (! MR["dinner"].includes(restaurant)){
                    MR["dinner"].push(restaurant)
                    MRD["dinner"][restaurant]=[]
                }
                if (!MRD["dinner"][restaurant].includes(name)) {
                    MRD["dinner"][restaurant].push(name)
                }

                }
        }
    }
    console.log(MRD)
    return {MR ,MRD};
}

let ProcessData=  MealRestaurantDishes(dishes);


export default ProcessData;