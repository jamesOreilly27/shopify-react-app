import React, { Component } from 'react'

const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <div> {product.title} </div>
  )
}

export default ProductCard
