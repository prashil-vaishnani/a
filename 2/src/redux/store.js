import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

//initial state
const initialState = {
  isLoggedIn: false,
  userDetails: {
    userAvatar: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
  },
};

// Signup Form Slice
export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState: initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        return {
          isLoggedIn: true,
          userDetails: {
            userAvatar: action.payload.profilePic,
            userName: action.payload.name,
            userEmail: action.payload.email,
            userPhone: action.payload.phoneNo,
            userPassword: action.payload.password,
          },
        };
      },
      prepare: (data) => {
        return { payload: data };
      },
    },
    logout: (state) => {
      return initialState;
    },
  },
});

// getting login, logout actions from signUpFormSlice object
export const auth = signUpFormSlice.actions;

// getting reducer from signUpFormSlice object
export const signUpFormReducer = signUpFormSlice.reducer;
export const store = configureStore({
  reducer: {
    signUpForm: signUpFormReducer,
  },
});
