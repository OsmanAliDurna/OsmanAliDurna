import React from 'react'

const Product = ({title, price, image}) => {
  return (
    <div className='product'
        style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:'400px',
            width:'400px',
        }}>
        <p className='price'>{price}</p>
        <p className='desc'>{title}</p>
    </div>
  )
}

export default Product