import { Link } from "react-router-dom"
import Product from "../../pages/Product"

const ProductItem = ({ product }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100" style={{ "min-height": "500px" }}>
        <Link to={`/products/${product.id}`}>
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} />
        </Link>
        <div className="card-body">
          <div className="card-title">
            <h5>
              {product.name} ({product.category})
            </h5>
          </div>
          <div className="card-text">
            <p>{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: {product.price}</li>
          </ul>
        </div>
        <div className="card-footer">{product.price}</div>
      </div>
    </div>
  )
}

export default ProductItem
