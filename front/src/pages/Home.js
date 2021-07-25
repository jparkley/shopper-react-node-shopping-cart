import React from "react"
import ProductList from "../components/products/ProductList"
import Product from "./Product"

const Home = () => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-10 p-2">
        <p className="text-center mb-5 display-6">
          <strong>Shop Now</strong>, most <em>reliable</em> <mark>React</mark> shopping cart
          <h5 className="mt-3">Modern and upscale shopping destination</h5>
        </p>
        <ProductList />
      </div>
    </div>
  )
}

export default Home
