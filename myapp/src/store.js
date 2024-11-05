import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/others/counterSlice'


export const store=configureStore({
    reducer:{
        counter:counterReducer
    }

})