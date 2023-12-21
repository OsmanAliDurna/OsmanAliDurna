import React from "react";

const ButtonGroup = ({ getData, userAdd }) => {
  return (
    <div className="btn-group">
      <button className="btn" type="button" onClick={() => getData()}>
        new user
      </button>
      <button className="btn" type="button" onClick={() => userAdd()}>
        add user
      </button>
    </div>
  );
};

export default ButtonGroup;
