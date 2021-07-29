import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import formatPrice from "../components/tools/formatPrice"
import Top from "../components/layout/Top"
import Spinner from "../components/tools/Spinner"

const Product = () => {
  const { productId } = useParams()

  const { data: product, isLoading } = useQuery("Product", () => axios(`/api/products/${productId}`).then(res => res.data.product))

  if (isLoading) return <Spinner />

  //const price = formatPrice(product)
  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-10 p-2 title">
          <Top name={product.name} category={product.category} />
        </div>
      </div>
      <div className="row justify-content-center mt-8">
        <div className="col-md-4">
          <div className="p-10">
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
        </div>
        <div className="col-md-4">
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} />
        </div>
      </div>
    </>
  )
}

export default Product
