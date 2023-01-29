import { Types } from "../actions/entries.action";

const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case Types.GET_ENTRIES_SUCCESS:
      return action.payload;
    case Types.ADD_ENTRY:
      return [...state, action.payload];
    case Types.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    case Types.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;

const initialEntries = [];
