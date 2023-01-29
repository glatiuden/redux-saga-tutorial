import { actions } from "../actions/modals.action";

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case actions.CLOSE_MODAL:
      return { ...state, isOpen: false, id: null };
    case actions.OPEN_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    default:
      return state;
  }
};

export default reducer;
