import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import shop from "../helpers/images/shopping-bag-icon.png"
import { Image } from "react-bootstrap";

const Navbarr = () => {
  return (
    <Navbar expand="lg" className="py-2 fixed-top navbar-light bg-white">
      <Container className="py-3">

        <Link to="/home" className="navbar-brand d-flex align-items-center justify-content-between order-lg-0">
          <Image src={shop} alt="" rounded/>
          <span className="text-uppercase">MyShop</span>
        </Link>

        <div className="nav-btns d-flex order-lg-2">
          <button type="button" className="btn position-relative">
            <FaShoppingCart />
            <span className="badge bg-danger position-absolute translate-middle top-0 start-100 fw-lighter">5</span>
          </button>
          <button type="button" className="btn position-relative">
            <AiFillHeart />
            <span className="badge bg-danger position-absolute translate-middle top-0 start-100 fw-lighter">3</span>
          </button>
          <button type="button" className="btn position-relative">
            <FcSearch />
          </button>
        </div>
        <Navbar.Toggle aria-controls="navMenu" />
        <div className="container-fluid">
          
          <Navbar.Collapse className="collapse navbar-collapse" id="navMenu">
            <Navbar className="navbar-nav text-center mx-auto">
              <li className="nav-item p-2">
                <Link to="/" className="nav-link text-uppercase text-dark">home</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/collection" className="nav-link text-uppercase text-dark">collection</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/specials" className="nav-link text-uppercase text-dark">specials</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/blogs" className="nav-link text-uppercase text-dark">blogs</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/about" className="nav-link text-uppercase text-dark">about us</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/popular" className="nav-link text-uppercase text-dark">popular</Link>
              </li>
            </Navbar>
          </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>
  );
};

export default Navbarr;
