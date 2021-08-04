import { userShoppingCart, useShoppingCart } from "use-shopping-cart"
import { FaShoppingCart } from "react-icons/fa"

const CartSummary = () => {
  const { cartCount, formattedTotalPrice } = useShoppingCart()

  return (
    <>
      <FaShoppingCart /> {formattedTotalPrice} ({cartCount})
    </>
  )
}

export default CartSummary
