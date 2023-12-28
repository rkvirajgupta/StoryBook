import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./UserSlice/UserSlice";
import flagReducer from "./FlagSlice/FlagSlice";
import storydetailsReducer from "./StorydetailsSlice/StorydetailsSlice";
import storyReducer from "./StorySlice/StorySlice";

const reducers = combineReducers({
  user: userReducer,
  flag: flagReducer,
  storydetails: storydetailsReducer,
  story: storyReducer,
});

const persistConfig = {
  key: `root`,
  storage: storage,
  whitelist: ["story"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
