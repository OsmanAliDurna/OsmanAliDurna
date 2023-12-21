import React from "react";

const NewList = ({ list, removeList }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="head-tr">
            <th className="th">Firstname</th>
            <th className="th">Email</th>
            <th className="th">Phone</th>
            <th className="th">Age</th>
          </tr>
          {list.map(({ name: { first }, email, phone, dob: { age }, login: {uuid} }) => (
            <tr>
              <td className="td">{first}</td>
              <td className="td">{email}</td>
              <td className="td">{phone}</td>
              <td className="td">{age}</td>
              <button type="button" onClick={() => removeList(uuid)}>
                🗑
              </button>
            </tr>
          ))}
        </thead>
        <tbody>
          <tr className="body-tr"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewList;
