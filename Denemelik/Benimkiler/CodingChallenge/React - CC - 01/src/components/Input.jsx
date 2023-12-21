import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Input = ({ handleAdd }) => {
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const send = (e) => {
    e.preventDefault();
    handleAdd(change);
    setChange("");
  };

  return (
    <Form onSubmit={send}>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
          value={change}
        />
        <Button variant="success" type="submit">
          Add to List
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Input;
