import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../App.css";

function Cart() {
  return (
    <div id="all">
      <div id="content">
        <div className="container">
          <div className="row">
            <div id="cart" className="col-lg-9">
              <div className="box border-main rounded">
                <form method="post" action="">
                  <h1>Shopping cart</h1>
                  <p className="text-muted">You currently have 3 item(s) in your cart.</p>
                  <div className="table-responsive">
                    <table className="table justify-content-around text-black border-none">
                      <thead>
                        <tr>
                          <th colSpan="2">Product</th>
                          <td></td>
                          <th>Quantity</th>
                          <th>Unit price</th>
                          <th colSpan="2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="d-md-block d-none">
                            <div>
                              <img src="img/detailsquare.jpg" alt="White Blouse Armani" />
                            </div>
                          </td>
                          <td>
                            <div>White Blouse Armani</div>
                          </td>
                          <td></td>
                          <td>
                            <input type="number" value="2" className="form-control" />
                          </td>
                          <td>$123.00</td>
                          <td>$246.00</td>
                          <td>
                            <div className="pointer">
                              <BsTrash />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-md-block d-none">
                            <div>
                              <img src="img/basketsquare.jpg" alt="Black Blouse Armani" />
                            </div>
                          </td>
                          <td>
                            <div>Black Blouse Armani</div>
                          </td>
                          <td></td>
                          <td>
                            <input type="number" value="1" className="form-control" />
                          </td>
                          <td>$200.00</td>
                          <td>$200.00</td>
                          <td>
                            <div className="pointer">
                              <BsTrash />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan="5">Total</th>
                          <th colSpan="2">$446.00</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {/* <!-- /.table-responsive--> */}
                  <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                    <div className="left mb-lg-0 mb-2">
                      <NavLink to="/" className="button-main text-decoration-none">
                        Continue shopping
                      </NavLink>
                    </div>
                    <div className="right">
                      <NavLink to="/checkout">
                        <button type="submit" className="button-secondary">
                          Checkout <MdOutlineArrowForwardIos />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Order Summary */}
            <div className="col-lg-3">
              <div id="order-summary" className="box border-main rounded">
                <div className="box-header">
                  <h3 className="mb-0 text-center">Order summary</h3>
                </div>
                <p className="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Order subtotal</td>
                        <th>$446.00</th>
                      </tr>
                      <tr>
                        <td>Shipping and handling</td>
                        <th>FREE</th>
                      </tr>

                      <tr className="total">
                        <td>Total</td>
                        <th>$456.00</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Akhir Order Summary */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
