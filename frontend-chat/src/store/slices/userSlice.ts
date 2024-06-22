import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface UserState {
	accessToken: string | undefined
}

const initialState: UserState = {
	accessToken: undefined,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAccessToken(state, action: PayloadAction<string | undefined>) {
			state.accessToken = action.payload
		},
	},
})

export const userActions = userSlice.actions

export default userSlice.reducer
