import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
