import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'



export interface step{
    value: number
}

const initialState: step= {
    value: 0,
} 

export const stepSlice = createSlice({
    name:'step',
    initialState,
    reducers:{
        changeStep:(state:step,action) =>{
            state.value = action.payload
            console.log("Step changed ",state.value)
        }
    }
})

export const {changeStep} = stepSlice.actions
export default stepSlice.reducer
