import { configureStore } from "@reduxjs/toolkit";
import dishesNameReducer from "./reducers/dishesNameReducer";
import dishesNoReducer from "./reducers/dishesNoReducer";
import mealReducer from "./reducers/mealReducer";
import peopleReducer from "./reducers/peopleReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import stepProceedReducer from "./reducers/stepProceedReducer";
import stepReducer from "./reducers/stepReducer";
import submitReducer from "./reducers/submitReducer";




const store = configureStore({
    reducer:{
        meal : mealReducer,
        restaurant: restaurantReducer,
        step: stepReducer,
        stepProceedable: stepProceedReducer,
        people:peopleReducer,
        dishesNo: dishesNoReducer,
        dishesName: dishesNameReducer,
        submit:submitReducer,        
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;