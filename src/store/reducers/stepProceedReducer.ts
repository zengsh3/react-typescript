import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'



export interface stepProceed{
    value: boolean
}

const initialState: stepProceed = {
    value: true,
} 

export const stepProceedSlice = createSlice({
    name:'step proceedable flag',
    initialState,
    reducers:{
        canProceed:(state:stepProceed,action) =>{
            state.value = true
            console.log("Step changed ",state.value)
        },
        cannotProceed:(state:stepProceed,action) =>{
            state.value = false
            console.log("Step changed ",state.value)
        }
    }
})

export const {canProceed, cannotProceed} = stepProceedSlice.actions
export default stepProceedSlice.reducer
