import { useEffect, useState } from "react"
import axios from "axios"
import ProductItem from "./ProductItem"

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => res.data.products)
      .then(products => setProducts(products))
  }, [])

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
