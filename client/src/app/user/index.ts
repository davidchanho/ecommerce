import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { loginUser, registerUser } from './userAPI'

export interface IAuth {
    email: string
    password: string
}

export interface IRegister extends IAuth {
    first_name: string
    last_name: string
}

export interface UserState {
    email: string
    name: string
    token: string
    isAuth: boolean
    status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
    email: '',
    name: '',
    token: '',
    isAuth: false,
    status: 'idle',
}

export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }: IAuth) => {
        const response = await loginUser(email, password)
        return response.data
    }
)

export const registerUserAsync = createAsyncThunk(
    'user/registerUser',
    async ({ email, password, first_name, last_name }: IRegister) => {
        const response = await registerUser(email, password, first_name, last_name)
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.status = 'idle'
            state.isAuth = false
            state.email = ""
            state.token = ""
            state.name = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.token = action.payload.token
                state.email = action.payload.email
                state.name = action.payload.name
                state.isAuth = true
            })
            .addCase(loginUserAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(registerUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(registerUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            .addCase(registerUserAsync.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const { logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
