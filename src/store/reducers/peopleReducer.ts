import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface peopleState{
    value: number
}

const initialState:peopleState = {
    value:1,
} 

export const peopleSlice = createSlice({
    name:'numberOfPeople',
    initialState,
    reducers:{
        peopleChange:(state:peopleState, action) =>{
            state.value = action.payload
            console.log("people changed ",state.value)
        }
    }
})

export const {peopleChange} = peopleSlice.actions
export default peopleSlice.reducer
