import Modal from "react-modal"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"

Modal.setAppElement("#root")

const CartModal = ({ isOpen, toggleModal }) => {
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart()
  const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])
  console.log(cartItems)

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay">
      <div className="d-flex d-inline-flex align-items center">
        <span className="me-3">Cart Summary</span>
        <span>
          <strong>
            {formattedTotalPrice} ({cartCount} Items)
          </strong>
        </span>
      </div>
      <div className="row">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </Modal>
  )
}

export default CartModal
