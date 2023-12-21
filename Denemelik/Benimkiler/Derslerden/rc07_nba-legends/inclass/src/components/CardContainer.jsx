import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([...data])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setCount(count+1);
    console.log(count)
      setFiltered([...filtered,{
        name: "Kasem Abdul-Jabbar" + count,
        img: "https://s22928.pcdn.co/wp-content/uploads/2018/03/Kareem-Abdul-Jabbar.jpg",
        statistics: [
          "38,387 points",
          "17,440 rebaunds",
          "5,660 assist",
          "19 All Star",
        ]
      }])
  }
  
  const showImage = true;

  return (
    <>
      <Form.Control type="search" value={search} placeholder="Search a player" className="w-50 m-auto" onChange={handleSearch}/>
      <Button variant="btn btn-success" type="submit" onClick={handleAdd}>Submit</Button>
<Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {filtered.map((player) => (
            <Col xl={3} lg={4} md={6} >
              <PlayerCard {...player} showImage={showImage}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;