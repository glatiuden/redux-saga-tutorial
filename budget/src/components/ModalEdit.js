import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { closeModal } from "../store/actions/modals.action";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
