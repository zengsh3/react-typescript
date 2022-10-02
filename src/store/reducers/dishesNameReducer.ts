import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface dishesNameState{
    value: string[]
}

const initialState:dishesNameState = {
    value:[''],
} 

export const dishesNameSlice = createSlice({
    name:'nameOfDishes',
    initialState,
    reducers:{
        dishesNameChange:(state:dishesNameState, action) =>{
            state.value = action.payload
            console.log("Number of dishes changed ",state.value)
        },
        dishesNameAdd:(state:dishesNameState, action) =>{
            state.value = state.value
            console.log("Number of dishes changed ",state.value)
        },
        dishesNameDelete:(state:dishesNameState, action) =>{
            state.value = action.payload
            console.log("Number of dishes changed ",state.value)
        }
    }
})

export const {dishesNameChange, dishesNameAdd, dishesNameDelete} = dishesNameSlice.actions
export default dishesNameSlice.reducer
