import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { FaTwitter, FaYoutube, FaFacebookSquare, FaMailBulk } from "react-icons/fa"
import formatPrice from "../components/utils/formatPrice"
import Spinner from "../components/utils/Spinner"
import AddToCart from "../components/checkout/AddToCart"
import RemoveFromCart from "../components/checkout/RemoveFromCart"

const Product = () => {
  const { productId } = useParams()

  const { data: product, isLoading } = useQuery("Product", () => axios(`/api/products/${productId}`).then(res => res.data.product))

  if (isLoading) return <Spinner />

  const price = formatPrice(product)
  return (
    <div className="row justify-content-center product-item">
      <div className="col-md-10 p-4 top">
        <p className="text-center mb-2 display-6">
          <strong>{product.name}</strong>
        </p>
        <h5 className="text-center mb-2">
          <em>{product.subtitle}</em>
        </h5>
        <p className="text-muted text-center mb-0">Category: {product.category}</p>
      </div>

      <div className="col-md-4 p-3">
        <img className="img-fluid rounded shadow-1" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} />
      </div>
      <div className="col-md-4 p-3 right">
        <div className="d-flex flex-column">
          <div className="product-info">
            <p className="text-muted">
              <small>Item #: {product.id}</small>
            </p>
            <p>{price}</p>
            <div className="mb-4">
              <AddToCart product={product} />
              {/* <RemoveFromCart product={product} /> */}
            </div>
            <p>{product.description}</p>
            <div>
              <p>
                <small>{product.description_long}</small>
              </p>
            </div>
          </div>
          <div className="social-icons text-end">
            <FaTwitter /> <FaYoutube /> <FaFacebookSquare /> <FaMailBulk />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
