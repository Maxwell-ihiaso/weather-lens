import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    // Name of our slice which we will call in our store
    name: 'weather',
    // Initial state
    initialState: {
        value: '',
    },

    // Our method inside reducers to change our state value
    reducers: {
        inputHandler: (state, action) => {
            state.value = action.payload
        },
    },
})

// Exporting our method to be called in the component
export const { inputHandler } = inputSlice.actions
