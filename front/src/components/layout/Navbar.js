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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <div className="navbar-nav d-flex justify-content-between w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active me-2" aria-current="page" href="#">
                  Special
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  me-2" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="nav-link  me-2" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <CartSummary />
              <CheckoutCart />
            </div>
          </div>
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
