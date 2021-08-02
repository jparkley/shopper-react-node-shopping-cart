import { useShoppingCart } from "use-shopping-cart"
import toast from "react-hot-toast"

const AddToCart = ({ product1 }) => {
  const product = {
    name: "Bananas",
    description: "Yummy yellow fruit",
    id: "id_banana001",
    price: 400,
    currency: "USD",
    image: "https://my-image.com/banana.jpg"
  }

  console.log(product)
  const { addItem } = useShoppingCart()

  const handleAddItem = () => {
    addItem(product)
    toast.success(`${product.title} is added to your cart.`)
  }
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block btn-hover" onClick={handleAddItem}>
      Add to Cart
    </button>
  )
}

export default AddToCart
