import axios from "axios"
import toast from "react-hot-toast"
import { useShoppingCart } from "use-shopping-cart"

function useCheckout() {
  const { redirectToCheckout, cartDetails } = useShoppingCart()

  function handleCheckout() {
    const session = await axios
      .post("/api/checkout-sessions", cartDetails)
      .then(res => res.data)
      .catch(e => {
        toast.error("Checkout failed")
        console.log("Error during checkout")
      })

    if (session) {
      redirectToCheckout({ sessionId: sesssion.id })
    }
  }
}

export default useCheckout
