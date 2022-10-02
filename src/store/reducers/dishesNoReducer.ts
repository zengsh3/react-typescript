import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface dishesNoState{
    value: number[]
}

const initialState:dishesNoState = {
    value:[1],
} 

export const dishesNoSlice = createSlice({
    name:'numberOfDishes',
    initialState,
    reducers:{
        dishesNoChange:(state:dishesNoState, action) =>{
            state.value = action.payload
            console.log("Number of dishes changed ",state.value)
        },
        dishesNoAdd:(state:dishesNoState, action) =>{
            state.value = state.value
            console.log("Number of dishes changed ",state.value)
        },
        dishesNoDelete:(state:dishesNoState, action) =>{
            state.value = action.payload
            console.log("Number of dishes changed ",state.value)
        }
    }
})

export const {dishesNoChange, dishesNoAdd, dishesNoDelete} = dishesNoSlice.actions
export default dishesNoSlice.reducer
