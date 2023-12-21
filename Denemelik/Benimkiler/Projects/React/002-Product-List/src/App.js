import ProductCard from "./components/ProductCard/ProductCard"
import {products, categories} from "./helper/data"
import "./App.scss"
import { useState } from "react"

function App() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleFilter = (e) => {
    setCategoryFilter(e.target.textContent);
    console.log(categoryFilter)
  }

  return (
    <div>
      <div className='header'>
          <h1>Product List</h1>
          <div className='buttons' onClick={handleFilter}>
            {categories.map((category, i) => (<button key={i}>{category.toUpperCase()}</button>))}
          </div>
      </div>    
      <ProductCard products={products} categoriesS={categoryFilter.toLowerCase()}/>
    </div>
  )
}

export default App
