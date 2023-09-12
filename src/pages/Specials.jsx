import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { ProductSpecial } from "../helpers/data"


const Specials = () => {
  return (
    <Container id="special" className="mt-5 py-5">

      <div class="title text-center py-5">
        <h2 class="position-relative d-inline-block">Special Selection</h2>
      </div>

      <CardGroup className="special-list row g-0 d-flex gap-3">

      {
        ProductSpecial.map((product) => (
        <Card class="card col-md-6 col-lg-4 col-xl-3 p-2">
          <div class = "special-img position-relative overflow-hidden">
            <Card.Img className="img" variant="top" src={product.image} height="390"/>
            <span class = "position-absolute d-flex align-items-center justify-content-center text-warning fs-4">
              <AiFillHeart className="icon"/>
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between px-2">
         <Card.Title className="text-uppercase text-center my-3">
              {product.pName}
          </Card.Title>
          <Card.Text className="text-secondary">
              {product.price}
          </Card.Text>            
          </div>
          <Card.Text className="px-2">
              {product.desc}
          </Card.Text>
          <Button className="btn col-12 btn-danger py-2">Add to Cart</Button>
        </Card>          
        ))
      }

      </CardGroup>

    </Container>
  );
};

export default Specials;
