import Modal from "react-modal"
import { useShoppingCart } from "use-shopping-cart"
import useCheckout from "../utils/useCheckout"
import CartItem from "./CartItem"

Modal.setAppElement("#root")

const CartModal = ({ isOpen, toggleModal }) => {
  const handleCheckout = useCheckout()
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart()
  const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay">
      <div className="">
        <div className="modal-dialog modal-lg d-flex d-inline-flex align-items center">
          <div className="modal-content">
            <div className="modal-header d-inline-flex justify-content-between">
              <span className="modal-title me-3">Cart Summary</span>
              <span className="d-flex align-items-center">
                <strong>
                  {formattedTotalPrice} ({cartCount} Items)
                </strong>
                <button type="button" className="btn-close ms-1" aria-label="Close" onClick={toggleModal}></button>
              </span>
            </div>

            <div className="modal-body">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary text-dark" onClick={handleCheckout}>
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
