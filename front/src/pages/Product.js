import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import formatPrice from "../components/tools/formatPrice"

const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then(res => res.data.product)
      .then(product => setProduct(product))
  }, [])

  //const price = formatPrice(product)
  return (
    <div className="row justify-content-center mt-8">
      <div className="col-md-2"></div>
      <div className="col-md-4 p-2">
        <h4 className="text-center">
          {product.name} ${product.price}
        </h4>
        <p>
          <strong>{product.description}</strong>
        </p>
        <p>{product.description_long}</p>
        <span>{product.category}</span>
        <div>
          <button className="btn btn-primary btn-hover">Add to Cart</button>
        </div>
      </div>
      <div className="col-md-4">
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} />
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}

export default Product
