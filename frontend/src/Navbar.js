import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (email.length < 2) {
      return;
    }
    document.getElementById("modalClose").click();
    navigate(`/ticket/${email}`);
  };
  return (
    <>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Search Ticket
              </h1>
              <button
                type="button"
                id="modalClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleSearch}
                type="button"
                className="btn btn-outline-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="main-nav" id="navbar-main">
        <Link className="logo" to="/">
          Cyber Tronic
        </Link>
        <ul className="nav-items ">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span className="fas fa-search"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
