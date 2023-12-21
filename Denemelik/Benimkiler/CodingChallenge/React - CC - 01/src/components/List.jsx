import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { useState } from "react";

const List = ({ id, text, isDone, handleDelete, handleEdit }) => {
  const [clicked, setClicked] = useState(false);
  const [crossout, setCrossout] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleUpdate = (e) => {
    setNewText(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    handleEdit(id, newText);
  };

  const handleDiscard = () => {
    setClicked(!clicked);
    setNewText(text);
  };

  const handleDone = (id) => {
    setCrossout(!crossout);
    isDone(id);
  };

  return (
    <div className="m-3 d-flex justify-content-between align-items-center">
      <div>
        {clicked ? (
          <Form onSubmit={save}>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleUpdate}
                value={newText}
              />
              <Button variant="info" type="submit">
                Save
              </Button>
              <Button variant="danger" type="button" onClick={handleDiscard}>
                Discard
              </Button>
            </InputGroup>
          </Form>
        ) : (
          <Form.Check className="text-decoration-line-through"
            type="checkbox"
            id={id}
            label={newText}
            checked={crossout && "checked"}
            onClick={() => handleDone(id)}
          />
        )}
      </div>
      <div>
        <FaRegEdit className="fs-2 text-info me-3" onClick={handleClick} />
        <MdDoneOutline
          className="fs-2 text-success me-3"
          onClick={handleDone}
        />
        <IoTrashBinOutline
          className="fs-2 text-danger me-3"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default List;
