import "../Style/Product.css";
import Header from "../component/Header";
import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Create() {
  return (
    <>
      <Header />
      <Container className="my-5 rounded border-main justify-center align-items-center">
        <div class="create ">
          <div class="row  justify-content-start">
            <div class="" style={{ width: "18rem" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wijayajewelry.com/wp-content/uploads/2020/01/2c-2-1024x1024.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col mb-5 border-form">
            <section>
              <div className="container px-lg-5 my-5">
                <div className=" gx-lg-5">
                  <div>
                    <img className="card-img-top mb-5" src={""} alt={""} />
                  </div>
                  <div col-md-6 border-form>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="productName"
                          aria-describedby="productName"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">
                          Product Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="productPrice"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="productDescription"
                          className="form-label"
                        >
                          Product Description
                        </label>
                        <textarea
                          className="form-control"
                          id="productDescription"
                          rows={4}
                          cols={50}
                        />
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <button
                        className=" flex-shrink-0 button-main shadow "
                        type="button"
                      >
                        <label class="form-label mb-0" for="customFile">
                          Save
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          id="customFile"
                          className="visually-hidden"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Create;
