import Modal from "react-modal"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"

Modal.setAppElement("#root")

const CartModal = ({ isOpen, toggleModal }) => {
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart()
  const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay">
      <div className="">
        <div className="modal-dialog modal-lg d-flex d-inline-flex align-items center">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title me-3">Cart Summary</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <span>
                <strong>
                  {formattedTotalPrice} ({cartCount} Items)
                </strong>
              </span>
            </div>

            <div className="modal-body">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary text-dark">
                <strong>Checkout</strong>
              </button>
              <button type="button" className="btn btn-primary text-dark" data-bs-dismiss="modal" onClick={toggleModal}>
                Keep Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CartModal
