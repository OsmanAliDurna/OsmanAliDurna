import React from 'react'
import "./ProductCard.scss"
import Product from './Product'

const ProductCard = ({products, categoriesS}) => {
  return (
    <div className='allProduct'>
    {categoriesS === "all" ? products.map((item) => (<Product {...item}/>)) : products.filter((cat) => cat.category === categoriesS).map((item) => (<Product {...item}/>))}
    </div>
  )
}

export default ProductCard