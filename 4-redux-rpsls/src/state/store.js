import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { gameSlice } from "./gameSlice"

const rootReducer = combineReducers({
	[gameSlice.name]: gameSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true
})
