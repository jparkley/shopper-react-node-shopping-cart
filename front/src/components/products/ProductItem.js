import { Link } from "react-router-dom"
import formatPrice from "../utils/formatPrice"

const ProductItem = ({ product }) => {
  const price = formatPrice(product)
  return (
    <div className="col mb-5">
      <div className="card h-100" style={{ minHeight: "500px" }}>
        <Link to={`/products/${product.id}`}>
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} />
        </Link>
        <div className="card-body">
          <div className="card-title">
            <h5>
              {product.category} &gt; {product.name}
            </h5>
          </div>
          <div className="card-text">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div>
              <strong>{price}</strong>
            </div>
            <div>
              <button className="btn btn-md">
                <strong>Add to cart</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
