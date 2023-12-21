import React from "react";
import { Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = ({categories, handleFilter}) => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
      {categories.map((category, index) => (<button key={index} onClick={() => handleFilter(category)}>{category.toLocaleUpperCase()}</button>))}
      </Stack>
    </Container>
  );
};