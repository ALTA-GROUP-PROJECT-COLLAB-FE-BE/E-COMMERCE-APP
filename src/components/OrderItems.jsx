import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const OrderItems = (props, onClickRemove) => {
    return (
        <div className="col-12 justify-center">
            <Card className="m-3 shadow-lg justify-center align-self-center">
                <Card.Body className="row" style={{ display: "flex" }}>
                    <Card.Title className="text-wrap fs-6 fw-normal overflow-hidden">Nama Penjual / Nama Product</Card.Title>
                    <Card.Img variant="top" src={props.image} style={{ width: "8rem", height: "10rem" }} className="justify-center mx-auto my-2 image-fluid" />
                    <Card.Text className="text-wrap fs-6">Harga</Card.Text>
                    <Card.Text className="text-wrap fs-6">Jumlah</Card.Text>
                    <Card.Text className="text-wrap fs-6">Total Harga</Card.Text>
                    <Card.Text className="text-wrap fs-6">Tanggal Order</Card.Text>
                    <Card.Text className="text-wrap fs-6">Status Order</Card.Text>
                    <Button variant="secondary" onClick={onClickRemove}>Cancel Order</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OrderItems;
