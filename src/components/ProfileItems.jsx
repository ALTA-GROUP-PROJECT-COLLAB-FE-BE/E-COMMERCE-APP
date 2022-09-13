import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

function ProfileItems({ image, username, onClickEdit, onClickCreate, onClickProduct, onClickOrder, onClickLogOut, onClickRemove }) {
    return (
        <div className="col-md-12 col-lg-12 col-12 justify-center">
            <Card className="m-3 shadow-lg justify-center align-self-center">
                <Card.Body style={{ backgroundColor: "#ebecc1" }}>
                    <Card.Img variant="top" src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-2.jpg" style={{ width: "10rem", height: "10rem" }} className="row mx-auto my-2 image-fluid" />
                    <Card.Title style={{ height: "5rem" }} className="text-wrap fs-6 fw-normal overflow-hidden row justify-center">
                        {username}
                    </Card.Title>

                    <Button className="col-12 flex-row justify-content-center button-main" onClick={onClickEdit}>Edit Profile</Button>
                    <div className="my-2">
                        <Button className="col-lg-4 col-md-4 col-12 justify-center" onClick={onClickCreate}>Create Product</Button>
                        <Button className="col-lg-4 col-md-4 col-12 justify-center" onClick={onClickProduct}>My Product</Button>
                        <Button className="col-lg-4 col-md-4 col-12 justify-center" onClick={onClickOrder}>My Order</Button>
                    </div>
                    <div className="my-2">
                        <Button className="col-lg-6 col-md-6 col-12 justify-content-end" onClick={onClickLogOut}>Log Out</Button>
                        <Button className="col-lg-6 col-md-6 col-12 justify-content-start btn btn-danger" onClick={onClickRemove}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileItems;
