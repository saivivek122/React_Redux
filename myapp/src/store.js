import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/others/counterSlice'
import userReducer from '../src/components/user/userSlice'


export const store=configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer
    }

})