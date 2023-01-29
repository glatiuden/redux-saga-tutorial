import { all } from "redux-saga/effects";
import entriesSagas from "./entries.saga";

export default function* rootSaga() {
  yield all([...entriesSagas]);
}
