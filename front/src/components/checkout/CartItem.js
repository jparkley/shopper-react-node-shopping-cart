import { useShoppingCart } from "use-shopping-cart"
import formatPrice from "../utils/formatPrice"

const CartItem = ({ item }) => {
  const { setItemQuantity } = useShoppingCart()
  const handleSetItemQuantity = e => {
    setItemQuantity(item.id, Number(e.target.value))
  }

  // NEED TO WORK ON MODAL SIZE CHANGE
  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <img className="img-tiny me-4" src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} alt={item.name} />
        <div>
          <span>
            {item.name} ({item.sku})
          </span>
          <p className="text-start mt-1">
            <strong>
              {formatPrice(item)} x {item.quantity}
            </strong>
          </p>
        </div>
        <div className="ms-auto text-end">
          <input className="text-end form-control input-quantity" type="number" value={item.quantity} min={0} onChange={handleSetItemQuantity} />
        </div>
      </div>
    </>
  )
}

export default CartItem
