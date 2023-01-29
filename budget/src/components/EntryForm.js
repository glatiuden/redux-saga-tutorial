import { Checkbox, Form, Segment } from "semantic-ui-react";
import React from "react";

const EntryForm = ({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  return (
    <>
      <Form.Group widths={3}>
        <Form.Input
          value={description}
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          value={value}
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
          onChange={(e) => setValue(e.target.value)}
          type="number"
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
