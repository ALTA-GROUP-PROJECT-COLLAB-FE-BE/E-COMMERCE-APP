import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Card } from "react-bootstrap";

const EditProfile = () => {
    return (
        <>
            <div className="col-12 row">
                <Card className="shadow-lg justify-center align-self-center col-4">
                    <Image src="https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-2.jpg" style={{ width: "10rem", height: "10rem" }} className="row mx-auto my-2 image-fluid"></Image>
                    <Button className="col-12 flex-row justify-content-center button-main">Upload Image</Button>
                    Ukuran Maksimal Gambar adalah 1mb
                </Card>
                <Card className="shadow-lg justify-center align-self-center col-8">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Username" />
                            <Form.Text className="text-muted">
                                Masukkan Username Baru
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Pengguna</Form.Label>
                            <Form.Control type="email" placeholder="Nama User" />
                            <Form.Text className="text-muted">
                                Masukkan Nama yang diperbaharui
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Email yang akan digunakan
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default EditProfile