import { useDispatch } from "react-redux";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { deleteEntryRedux } from "../store/actions/entries.action";
import { openModal } from "../store/actions/modals.action";

const EntryLine = ({ id, description, value, isExpense = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left" verticalAlign="middle">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              ${value}
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(deleteEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
