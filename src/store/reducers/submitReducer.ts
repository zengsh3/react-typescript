import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'



export interface submit{
    value: boolean
}

const initialState: submit= {
    value: false,
} 

export const submitSlice = createSlice({
    name:'submit flag',
    initialState,
    reducers:{
        canSubmit:(state:submit,action) =>{
            state.value = true
        },
        cannotSubmit:(state:submit,action) =>{
            state.value = false
        }
    }
})

export const {canSubmit, cannotSubmit} = submitSlice.actions
export default submitSlice.reducer
