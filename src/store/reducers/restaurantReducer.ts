import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ProcessData from '../../functions/preproscss'


const meals= ["breakfast", "lunch", "dinner"];
const restaurantSelect  = ProcessData.MR 

export interface restaurantState{
    value:string
}

const initialState:restaurantState = {
    value: restaurantSelect[meals[0]][0],
} 

export const restaurantSelectSlice = createSlice({
    name:'restaurantSelected',
    initialState,
    reducers:{
        restaurantChange:(state:restaurantState, action) =>{
            state.value = action.payload
            console.log("overall restaurant change",state.value)
        }
    }
})

export const {restaurantChange} = restaurantSelectSlice.actions
export default restaurantSelectSlice.reducer
