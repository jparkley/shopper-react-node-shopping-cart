import React from "react"
import ProductList from "../components/products/ProductList"
import Product from "./Product"

const Home = () => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-10">
        <p className="text-center">Shopper - React Shopping Cart Development Started</p>
        <ProductList />
      </div>
    </div>
  )
}

export default Home
