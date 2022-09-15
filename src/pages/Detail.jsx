import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useLocation } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import "../App.css";

function Detail() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const urlApi = `https://fakestoreapi.com/products/${location.state.id}`;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    alert("Success Adding To Cart");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProducts = async () => {
    await axios
      .get(urlApi)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleAddToCart = () => {
  //   alert("Success Adding To Cart");
  // };

  return (
    <>
      <section className="py-5 vh-150">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={products.image} alt={products.title} />
            </div>
            <div className="col-md-6">
              <h1 className="display-6 fw-bold">{products.title}</h1>
              <div className="fs-5 mb-5 fw-semibold mt-md-3">
                <span>${products.price}</span>
              </div>
              <div className="card mb-md-3 mb-0 p-3 shadow">
                <p className="fw-semibold fs-5">Description</p>
                <p className="lead">{products.description}</p>
              </div>
              <div className="d-flex">
                <button className=" flex-shrink-0 button-main shadow" type="button" onClick={() => addProduct(products)}>
                  Add To Cart <BsFillCartPlusFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
