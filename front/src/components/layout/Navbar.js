import { Collapse } from "bootstrap"
import CartSummary from "../checkout/CartSummary"
import CheckoutCart from "../checkout/CheckoutCart"
import logo from "./shopping.svg"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex justify-content-between">
            <img src={logo} width="24px" />
            <div className="m-2">
              <strong>Shop Now!</strong>
            </div>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Special
            </a>
            <a className="nav-link" href="#">
              FAQ
            </a>
            <a className="nav-link" href="#">
              About
            </a>
          </div>
        </div>
        <div>
          <CartSummary />
          <CheckoutCart />
        </div>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  )
}

export default Navbar
