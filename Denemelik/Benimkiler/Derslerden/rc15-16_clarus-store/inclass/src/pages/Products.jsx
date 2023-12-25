import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Loading from "../components/Loading";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  console.log(search);

  const getData = async () => {

    setLoading(true);

    try {
      const { data } = await axios(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);//!compoentnDidMount yani başlagıçta çalış birdaha çalışma

  useEffect(() => {
    getData();
  }, [search]); //! search statei değiştikçe getData fonksiyonu çalışsın

  return (
    <div className="container">

      <SearchInput search={search} setSearch={setSearch} />

      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>

      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="card-div">
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard item={item}/>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}

    </div>
  );
};

export default Products;
