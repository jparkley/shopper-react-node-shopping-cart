import { useShoppingCart } from "use-shopping-cart"
import toast from "react-hot-toast"

const AddToCart = ({ product }) => {
  const { addItem } = useShoppingCart()

  const handleAddItem = () => {
    addItem(product)
    toast.success(`${product.name} is added to your cart.`)
  }

  return (
    <button type="button" className="btn btn-primary btn-lg btn-block btn-hover me-2" onClick={handleAddItem}>
      Add to Cart
    </button>
  )
}

export default AddToCart
