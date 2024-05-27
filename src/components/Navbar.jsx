import React from 'react'
import transactionhistory from "../assets/transactionhistory.png";
const Navbar = () => {
  return (
    <nav className="navbar px-4">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-light" href="#">
      {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"> */}
      <img src={transactionhistory} alt="" width="70px" height="70px" />
      &nbsp; KHATABOOK
    </a>
  </div>
</nav>
  )
}

export default Navbar