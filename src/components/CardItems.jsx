import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

function CardItems({ image, title, price, onClickDetail }) {
  return (
    <div className="col-md-4 col-lg-3 col-12 justify-center">
      <Card className="m-3 shadow-lg justify-center align-self-center">
        <Card.Img variant="top" src={image} style={{ width: "8rem", height: "10rem" }} onClick={onClickDetail} className="justify-center mx-auto my-2 image-fluid overflow-hidden pointer" alt={title} />
        <Card.Body className="card-color rounded-bottom">
          <Card.Title style={{ height: "5rem" }} className="text-wrap fs-6 fw-semibold overflow-hidden">
            <div onClick={onClickDetail} className="text-black pointer">
              {title}
            </div>
          </Card.Title>
          <Card.Text className="text-wrap fs-6 fw-semibold text-dark lead">${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItems;
