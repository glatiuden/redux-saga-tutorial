import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/entries.action";
import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../store/actions/modals.action";

const useEntryDetails = (desc = "", val = "", isExp = true) => {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateEntry = (id) => {
    dispatch(
      actions.updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeModal());
    reset();
  };

  const addEntry = () => {
    dispatch(
      actions.addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    reset();
  };

  const reset = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return {
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
    reset,
    addEntry,
    updateEntry,
  };
};

export default useEntryDetails;
