import { useShoppingCart } from "use-shopping-cart"
import { useCheckout } from "../tools/useCheckout"

const CheckoutCart = () => {
  const { cartCount } = useShoppingCart()
  const handleCheckout = useCheckout()
  return (
    <button className="btn btn-primary btn-sm ms-3" onClick={handleCheckout} disabled={!cartCount}>
      Checkout{" "}
    </button>
  )
}

export default CheckoutCart
