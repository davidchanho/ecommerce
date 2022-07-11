import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Theme = 'light' | 'dark' | 'auto'

export interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
    },
})

export const { changeTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer