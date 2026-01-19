import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: {
    id: 'user-1',
    name: 'Madison Greg',
    email: 'Madison.reertr@example.com',
    isAuthenticated: true,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.user = {
        id: 'user-1',
        name: action.payload.name,
        email: action.payload.email,
        isAuthenticated: true,
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
