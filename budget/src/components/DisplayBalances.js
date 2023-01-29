import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({ expenseTotal, incomeTotal }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income:"
              value={incomeTotal}
              size="tiny"
              color="green"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expense:"
              value={expenseTotal}
              size="tiny"
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
