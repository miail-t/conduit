import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { editUserInfo, registrationUser, loginUser, getUser } from '../utils/api';
import { UserInfo } from './storeType';
import { RegistrationUser, User } from '../type/request'
import { customHistory } from '../App';


export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async (user: RegistrationUser, { rejectWithValue }) => {
        try {
            const { data } = await registrationUser(user);
            return data;
        } catch (err) {
            return rejectWithValue(err.errors)
        }
    }
)

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (user: RegistrationUser, { rejectWithValue }) => {
        try {
            const { data } = await loginUser(user);
            return data;
        } catch (err) {
            return rejectWithValue({ login: "Incorrect email or password" })
        }
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

type InitialState = {
    user: User,
    loading: boolean,
    error: any  // need to fix
}

const initialState: InitialState = {
    user: {
        email: '',
        token: '',
        username: '',
        createdAt: '',
        updatedAt: '',
        bio: '',
        image: '',
    },
    loading: false,
    error: {}
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logout() {
            localStorage.removeItem('token');
            customHistory.push('/');
            return initialState;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchRegistration.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRegistration.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.error = {};
            state.loading = false;
            localStorage.setItem('token', state.user.token);
        })
        builder.addCase(fetchRegistration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(fetchLogin.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.error = {};
            state.loading = false;
            localStorage.setItem('token', state.user.token);
        })
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = { ...action.payload.user };
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false
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
            state.error = {}
            state.loading = false
        })
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;