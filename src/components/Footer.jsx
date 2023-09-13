import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidChevronRight } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row className="text-white g-4">
          <Col className="col-md-6 col-lg-3">
            <Link to="/" className="text-uppercase text-decoration-none fw-bold">
              MyShop
            </Link>
            <p className="text-white mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
              dolor ipsam?
            </p>
          </Col>

          <Col className="col-md-6 col-lg-3">
            <h5 className="fw-900">Links</h5>
            <ul className="list-unstyled bg-dark">
              <li className="my-3 bg-dark">
                <Link to="/" class="text-white text-decoration-none">
                  <BiSolidChevronRight className="icon-links me-1 text-white"/>Home
                </Link>
              </li>
              <li className="my-3 bg-dark">
                <Link to="/" className="text-white text-decoration-none">
                  <BiSolidChevronRight className="icon-links me-1 text-white"/>Collection
                </Link>
              </li>
              <li className="my-3 bg-dark">
                <Link to="/" className="text-white text-decoration-none">
                  <BiSolidChevronRight className="icon-links me-1 text-white"/>Blogs
                </Link>
              </li>
              <li className="my-3 bg-dark">
                <Link to="/" className="text-white text-decoration-none">
                  <BiSolidChevronRight className="icon-links me-1 text-white"/>About Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col className="col-md-6 col-lg-3">
            <h5 className="fw-900 mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FaMapMarkedAlt className="icon-contact text-white" />
              </span>
              <span class="fw-light text-white">
                Albert Street, New York, AS 756, United States of America
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <BsFillEnvelopeFill className="icon-contact text-white" />
              </span>
              <span className="fw-light text-white">attire.support@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <BsTelephoneFill className="icon-contact text-white" />
              </span>
              <span className="fw-light text-white">+9786 6776 236</span>
            </div>
          </Col>

          <Col className="col-md-6 col-lg-3">
            <h5 className="fw-900 mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <Link to="/" className="text-decoration-none text-muted fs-4 me-4">
                    <BsFacebook className="icon-social text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <BsTwitter className="icon-social text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <BsInstagram className="icon-social text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <BsPinterest className="icon-social text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
