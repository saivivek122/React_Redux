import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/addUser", async (user) => {
    const response = await axios.post("https://reqres.in/api/users", user);
    return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("https://reqres.in/api/users");
    return response.data.data;
    
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        error: null,
        status: "idle",
        addingUserStatus: 'idel'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'success'
                state.users = action.payload;
                
            })

            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addUser.pending, (state, action) => {
                state.addingUserStatus = 'loading'
            })

            .addCase(addUser.fulfilled, (state, action) => {
                state.addingUserStatus = 'succeeded'
                //state -> initial values
                //action -> result
                //action.payload -> will contains response from api
                state.users.push(action.payload);
            })

            .addCase(addUser.rejected, (state, action) => {
                state.addingUserStatus = 'failed'
            });
    },
});

export default userSlice.reducer
