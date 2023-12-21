import React, { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import NewList from "./components/main/NewList";
import Header from "./components/header/Header";
import axios from "axios";
import ValueList from "./components/main/ValueList";
import ButtonGroup from "./components/main/ButtonGroup";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [list, setList] = useState([]);
  const [user, setUser] = useState({
    name: { first: "" },
    location: {
      street: "",
    },
    email: "",
    picture: { large: "" },
    dob: { age: "" },
    login: { password: "" },
    phone: "",
  });

  const getData = async () => {
    setSelected("");
    setResult("");
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const {
    name: { first },
    location: { street },
    email,
    picture: { large },
    dob: { age },
    login: { password },
    phone,
  } = user;

  const selection = (coming) => {
    setSelected(coming);
    switch (coming) {
      case "name":
        setResult(first);
        break;
      case "email":
        setResult(email);
        break;
      case "age":
        setResult(age);
        break;
      case "street":
        setResult(street.name);
        break;
      case "phone":
        setResult(phone);
        break;
      case "password":
        setResult(password);
        break;

      default:
        setResult(first);
        break;
    }
  };

  const userAdd = () => {
    setList([...list, user]);
  };

  const removeList = (id) => {
    setList(list.filter((added) => added.login.uuid !== id));
  };

  return (
    <main>
      <Header />
      <div className="block">
        <div className="container">
          <img
            src={large || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {selected || "name"} is</p>
          <p className="user-value">{result || "Guess What ?"}</p>
          <ValueList {...user} selection={selection} />
          <ButtonGroup getData={getData} userAdd={userAdd} />
          <NewList list={list} removeList={removeList} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
