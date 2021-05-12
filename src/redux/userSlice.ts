import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { editUserInfo, registrationUser, loginUser, getUser } from '../utils/api';
import { UserInfo } from './storeType';
import { RegistrationUser } from '../type/request'


export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async (user: RegistrationUser) => {
        const { data } = await registrationUser(user);
        return data;
    }
)

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (user: RegistrationUser) => {
        const { data } = await loginUser(user);
        return data;
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const { data } = await getUser()
        return data
    }
)

export const fetchEditUserInfo = createAsyncThunk(
    'user/fetchEditUserInfo',
    async (editParms: UserInfo) => {
        const { data } = await editUserInfo(editParms);
        console.log(data)
        return data;
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: '',
            token: '',
            username: '',
            bio: '',
            image: ''
        },
        loading: false,
        error: {}
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchRegistration.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRegistration.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.loading = false;
            localStorage.setItem('token', state.user.token);
        })

        builder.addCase(fetchLogin.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.loading = false;
            localStorage.setItem('token', state.user.token);
        })

        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(fetchEditUserInfo.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchEditUserInfo.fulfilled, (state, action) => {
            state.user = { ...action.payload.user }
            state.loading = false
        })
        builder.addCase(fetchEditUserInfo.rejected, (state, action) => {
            console.log(action)
            state.error = { }
            state.loading = false
        })
    }
});

export const { } = userSlice.actions;
export default userSlice.reducer;