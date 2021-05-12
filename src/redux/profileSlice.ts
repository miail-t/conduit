import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetProfile } from '../utils/api';

export const fetchGetProfile = createAsyncThunk(
    'profile/fetchGetProfile',
    async (username: string) => {
        try {
            const qwert = await GetProfile(username);
            return qwert
        } catch (e) {
            console.log(e)
        }
    }
)


const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGetProfile.fulfilled, (state, action) => {
        })
        builder.addCase(fetchGetProfile.pending, (state, action) => {

        })
    }
});

export const { } = profileSlice.actions;
export default profileSlice.reducer;