import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const url = "https://randomuser.me/api/";

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    picture: "",
    dob: "",
    location: "",
    phone: "",
  });

  const {
    id: { value },
    name: { first },
    email,
    picture: { large },
    dob: { date },
    location: { city },
    phone,
  } = user;

  useEffect(() => {
    const sure = setInterval(getUser, 2000);
    getUser()

    return () => {
      clearInterval(sure)
    }
  }, []);

  const getUser = () => {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  return (
    <div key={value}>
      <img src={large} alt={first} className="rounded-circle" />
      <p>Hi, My name is</p>
      <h1>{first}</h1>
      <h3>{email}</h3>
      <h5>{date?.slice(0,10)}</h5>
      <h5>{city}</h5>
      <h5>{phone}</h5>
      <button type="button" className="btn btn-success" onClick={getUser}>
        Get Another User
      </button>
    </div>
  );
};

export default User;
