import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const url = "https://6582f51302f747c8367ab59a.mockapi.io/products";
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios(url)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"d-sm-block d-md-flex"}>
        <p className="text-center text-danger w-100">Loading....</p>
        <>
          <article id="product-panel" className="col-md-5">
            {product?.map((p) => (
              <div key={p.id}>
                <ProductCard {...p} />
              </div>
            ))}
          </article>
          <article className="col-md-5 m-3">
            <CardTotal product={product} />
          </article>
        </>
        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
