import React from "react";
import { Container } from "react-bootstrap";

function EditProduct() {
  return (
    <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
      <section className="py-5 vh-150">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={""} alt={""} />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" id="productName" aria-describedby="productName" placeholder="Previous Product Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="productPrice" placeholder="Previous Product Price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <textarea className="form-control" id="productDescription" placeholder="Previous Product Description" rows={4} cols={50} />
                </div>
              </form>
              <div className="d-flex justify-content-between">
                <button className=" flex-shrink-0 button-main shadow " type="button">
                  <label class="form-label mb-0" for="customFile">
                    Change Image
                  </label>
                  <input type="file" class="form-control" id="customFile" className="visually-hidden" />
                </button>
                <button className=" flex-shrink-0 button-main shadow" type="button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default EditProduct;
