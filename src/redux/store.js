import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/user";
import sideBarReducer from "./reducers/sidebar";
import currentRoute from "./reducers/currentRoute";
import ChoosedPlan from "./reducers/choosedplans";
import billing from "./reducers/billing";
import plan from "./reducers/plan";
import metrics from "./reducers/metrics";
import tssData from "./reducers/tssData";
import latlng from "./reducers/latlng";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  user: useReducer,
  sidebar: sideBarReducer,
  currentRoute: currentRoute,
  choosedPlan: ChoosedPlan,
  billing: billing,
  plan: plan,
  metrics: metrics,
  tssData: tssData,
  latlng : latlng
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: [thunk],
});

export let persistor = persistStore(store);
