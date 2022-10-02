import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface mealState{
    value: string
}

const initialState:mealState = {
    value:'breakfast',
} 

export const mealSelectSlice = createSlice({
    name:'mealSelected',
    initialState,
    reducers:{
        mealChange:(state:mealState, action) =>{
            state.value = action.payload
            console.log("Meal changed ",state.value)
        }
    }
})

export const {mealChange} = mealSelectSlice.actions
export default mealSelectSlice.reducer
