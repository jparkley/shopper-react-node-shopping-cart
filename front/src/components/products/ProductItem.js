import React from "react"

const ProductItem = ({ product }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          {product.name} ({product.category}){`${process.env.PUBLIC_URL}/assets/images/uc-white.png`}
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} />
        </div>
        <div className="card-body">{product.description}</div>
        <div className="card-footer">{product.price}</div>
      </div>
    </div>
  )
}

export default ProductItem
