import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
