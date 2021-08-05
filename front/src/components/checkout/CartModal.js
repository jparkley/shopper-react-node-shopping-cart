import Modal from "react-modal"
import { useShoppingCart } from "use-shopping-cart"

Modal.setAppElement("#root")

const CartModal = ({ isOpen, toggleModal }) => {
  const { cartCount, formattedTotalPrice } = useShoppingCart()
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Cart Modal" closeTimeoutMS={500} className="cart-modal" overlayClassName="cart-overlay">
      <div className="card">
        <div className="flex flex-col items-start p-4 full m">
          <div className="flex items-center w-full mb-4">
            <div className="text-gray-900 font-medium text-lg">Cart Summary: ( Items)</div>
          </div>
          <hr />
        </div>
      </div>
    </Modal>
  )
}

export default CartModal
