import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const favoritedList = products.map((item) => item = {...item, favorite : false});
  const [filteredCategories, setFilteredCategories] = useState(favoritedList);
  const [input, setInput] = useState("");
  const [cata, setCata] = useState("all");

  const handleFilter = (category) => {
    setCata(category)
  }
  const handleSearch = (e) => setInput(e.target.value)
  const handleFavorite = (id) => {
    const updated = filteredCategories.map((item) => item.id === id ? {...item, favorite : !item.favorite} : item);
    setFilteredCategories(updated);
  }

  return (
    <>
      <Header categories={categories} handleFilter={handleFilter}/>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleSearch}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {(cata === "all" ? filteredCategories : filteredCategories.filter((item) => item.category === cata)).filter((item) => item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())).map((product) => 
            (<ProductCard {...product} handleFavorite={handleFavorite} key={product.id}/>))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
