import Modal from "react-modal"
import { useShoppingCart } from "use-shopping-cart"
import ModalItem from "./ModalItem"

Modal.setAppElement("#root")

const CartModal = ({ isOpen, toggleModal }) => {
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart()
  const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])
  console.log(cartItems)

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay">
      {formattedTotalPrice} ({cartCount} Items)
      {cartItems.map(item => (
        <ModalItem key={item.id} item={item} />
      ))}
    </Modal>
  )
}

export default CartModal
