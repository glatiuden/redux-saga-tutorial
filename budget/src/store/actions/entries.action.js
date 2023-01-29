export const Types = {
  GET_ENTRIES: "GET_ENTRIES",
  GET_ENTRY: "GET_ENTRY",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  GET_ENTRIES_SUCCESS: "GET_ENTRIES_SUCCESS",
  ADD_ENTRY_SUCCESS: "ADD_ENTRY_SUCCESS",
};

export const addEntryRedux = (payload) => {
  return { type: Types.ADD_ENTRY, payload };
};

export const deleteEntryRedux = (id) => {
  return {
    type: Types.REMOVE_ENTRY,
    payload: { id },
  };
};

export const updateEntryRedux = (id, entry) => {
  return {
    type: Types.UPDATE_ENTRY,
    payload: { id, entry },
  };
};

export const getAllEntries = () => {
  return { type: Types.GET_ENTRIES };
};

export const getEntriesSuccess = ({ data }) => ({
  type: Types.GET_ENTRIES_SUCCESS,
  payload: data,
});

export const getEntrySuccess = ({ data }) => ({
  type: Types.ADD_ENTRY_SUCCESS,
  payload: data,
});

export const getEntry = (id) => {
  return { type: Types.GET_ENTRY, payload: { id } };
};
