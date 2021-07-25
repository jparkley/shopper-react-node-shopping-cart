import React from "react"
import logo from "./shopping.svg"

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex justify-content-between">
            <img src={logo} width="24px" />
            <div className="m-2">
              <strong>Shop Now!</strong>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar
