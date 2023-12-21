import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Input from "./Input";
import List from "./List";
import { v4 } from "uuid";

const ToDo = () => {
  const [list, setList] = useState([]);

  const handleAdd = (item) => {
    setList([...list, { id: v4(), text: item, deleted: false }]);
  };

  const handleEdit = (id, newText) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const isDone = (id) => {
    console.log(id);
  };

  const allCheck = () => {
    console.log("ali");
  };

  return (
    <div className="container d-flex flex-column g-3">
      <h1 className="text-danger text-center p-3">Todo App</h1>
      <Input handleAdd={handleAdd} />
      {list.length > 0 && (
        <Form.Check
          type="checkbox"
          id="Allcheckbox"
          label="Select All"
          onClick={allCheck}
        />
      )}
      {list.map((item) => (
        <div key={item.id}>
          <List
            {...item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isDone={isDone}
          />
        </div>
      ))}
    </div>
  );
};

export default ToDo;
