import { useShoppingCart } from "use-shopping-cart"
import { toast } from "react-hot-toast"

const RemoveFromCart = ({ product }) => {
  const { removeItem, cartCount } = useShoppingCart()

  const handleRemoveItem = () => {
    removeItem(product.id)
    toast.success(`${product.name} is removed from the cart.`)
  }

  return (
    <button type="button" className="btn btn-primary btn-lg btn-block btn-hover" onClick={handleRemoveItem} disabled={!cartCount}>
      Remove
    </button>
  )
}

export default RemoveFromCart
