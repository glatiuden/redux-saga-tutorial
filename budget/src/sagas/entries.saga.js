import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { Types, getEntriesSuccess } from "../store/actions/entries.action";

function* getAllEntries() {
  const request = yield fetch("http://localhost:3001/entries");
  const data = yield request.json();
  yield put(getEntriesSuccess({ data }));
}

function* watchGetAllEntries() {
  yield takeEvery(Types.GET_ENTRIES, getAllEntries);
}

function* getEntry() {
  const { id } = yield take(Types.GET_ENTRY);
  const request = yield fetch(`http://localhost:3001/entries/${id}`);
  const data = yield request.json();
}

function* addEntry({ payload }) {
  yield fetch("http://localhost:3001/entries", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

function* watchAddEntry() {
  yield takeLatest(Types.ADD_ENTRY, addEntry);
}

function* deleteEntry({ id }) {
  yield fetch(`http://localhost:3001/entries/${id}`, {
    method: "DELETE",
  });
  yield put({ type: Types.REMOVE_ENTRY, payload: { id } });
}

function* watchDeleteEntry() {
  while (true) {
    const action = yield take(Types.REMOVE_ENTRY);
    yield call(deleteEntry, { id: action.payload.id });
  }
}

function* updateEntry({ payload }) {
  const { id, entry } = payload;
  yield fetch(`http://localhost:3001/entries/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });
}

function* watchUpdateEntry() {
  yield takeLatest(Types.UPDATE_ENTRY, updateEntry);
}

const entriesSaga = [
  fork(watchGetAllEntries),
  fork(watchAddEntry),
  fork(watchDeleteEntry),
  fork(watchUpdateEntry),
];

export default entriesSaga;
