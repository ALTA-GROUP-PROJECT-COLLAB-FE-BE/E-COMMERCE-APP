import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function CardItems({ image, title, price }) {
  return (
    <div className="col-md-3 col-12 justify-center">
      <Card className="m-3 shadow-lg justify-center align-self-center">
        <Card.Img variant="top" src={image} style={{ width: "8rem", height: "10rem" }} className="justify-center mx-auto my-2 image-fluid" />
        <Card.Body className="card-color">
          <Card.Title style={{ height: "5rem" }} className="text-wrap fs-6 fw-normal overflow-hidden">
            <Link to="/detail" className="text-decoration-none text-dark">
              {title}
            </Link>
          </Card.Title>
          <Card.Text className="text-wrap fs-6 fw-semibold">${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItems;
