import { useShoppingCart } from "use-shopping-cart"
import { handleCheckout } from "../tools/useCheckout"

const CheckoutCart = () => {
  const handleCheckout = useCheckout()
  return (
    <button className="btn btn-primary btn-sm ms-3" onClick={handleCheckout}>
      Checkout{" "}
    </button>
  )
}

export default CheckoutCart
