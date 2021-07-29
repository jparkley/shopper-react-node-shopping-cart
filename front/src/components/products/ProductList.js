import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import axios from "axios"
import ProductItem from "./ProductItem"
import Spinner from "../tools/Spinner"

const ProductList = () => {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("/api/products")
  //     .then(res => res.data.products)
  //     .then(products => setProducts(products))
  // }, [])

  const { data: products, isLoading } = useQuery("Products", () => axios("/api/products").then(res => res.data.products))

  if (isLoading) return <Spinner />

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
