import { configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from './slices/weatherSlice'

// Creating our store and combining all slices
export const store = configureStore({
    reducer: {
        [weatherSlice.name]: weatherSlice.reducer,
    },
    devTools: true,
})
