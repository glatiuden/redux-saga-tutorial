export const actions = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const openModal = (id) => {
  return { type: actions.OPEN_MODAL, payload: { id } };
};

export const closeModal = () => {
  return { type: actions.CLOSE_MODAL };
};
