import React from "react";
import { Button } from "react-bootstrap";
import { Products } from "../helpers/data"

const Collections = () => {
  return (
    <div>
      <section id="collection" className="py-5 bg-secondary-emphasis" style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Collection</h2>
          </div>
        </div>

        <div className="row">
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
            <Button className="btn m-2 text-white active" data-name="all">All</Button>
            <Button className="btn m-2 text-white" data-name="best">Best Sellers</Button>
            <Button className="btn m-2 text-white" data-name="feat">Featured</Button>
            <Button className="btn m-2 text-white" data-name="new">New Arrival</Button>
          </div>

          <div className="collection-list mt-4 row gap-3 d-flex align-items-center justify-content-center">
            {Products.map((product) => (
              <div
                key={product.id}
                className="card col-md-6 col-lg-4 col-xl-3 p-2 border-0"
                data-name="best"
              >
                <div className="collection-img position-relative">
                  <img
                    src={product.image}
                    className="w-100"
                    alt={product.pName}
                  />
                  <span className="position-absolute text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">{product.pName}</p>
                  <span className="fw-bold">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
