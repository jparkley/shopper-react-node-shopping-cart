import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { CartProvider } from "use-shopping-cart"
import { Toaster } from "react-hot-toast"
// import { loadStripe } from "@stripe/stripe-js"

import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Result from "./pages/Result"

const queryClient = new QueryClient()
const STRIPE_API_P = process.env.REACT_APP_STRIPE_API_P
console.log(STRIPE_API_P)
//const stripePromise = loadStripe(STRIPE_API_P)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider mode="checkout-session" stripe={STRIPE_API_P} currency="USD">
        <BrowserRouter>
          <Toaster position="bottom-center" />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:productId" component={Product} />
            <Route path="/result" component={Result} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
