import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    // Name of our slice which we will call in our store
    name: 'weather',
    // Initial state
    initialState: {
        value: '',
    },

    // Our method inside reducers to change our state value
    reducers: {
        updateWeather: (state, action) => {
            state.value = action.payload
        },
    },
})

// Exporting our method to be called in the component
export const { updateWeather } = weatherSlice.actions
