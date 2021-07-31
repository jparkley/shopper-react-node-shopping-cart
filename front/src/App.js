import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"

const queryClient = new QueryClient()
const STRIPE_API_P = process.env.REACT_APP_STRIPE_API_P
const stripePromise = loadStripe(STRIPE_API_P)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
