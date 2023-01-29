import combinedReducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../sagas";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const AppStore = configureStore({
  reducer: combinedReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default AppStore;
