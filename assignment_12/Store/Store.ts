import { configureStore } from "@reduxjs/toolkit";
import slice1 from './Reducers'

const store = configureStore({
    reducer:slice1
})

export default store