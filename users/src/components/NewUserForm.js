import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NewUserForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button outline color="primary" type="submit" block>
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
