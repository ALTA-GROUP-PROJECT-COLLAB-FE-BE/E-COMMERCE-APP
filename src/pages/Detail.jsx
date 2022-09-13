import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const urlApi = `https://fakestoreapi.com/products/${location.state.id}`;

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

  return (
    <>
      <div className="container" style={{ height: 1000 }}>
        <div className="row mx-auto justify-content-center ">
          <div className="col-auto align-self-center">
            <img src={products.image} alt={products.title} className="image-fluid" style={{ width: "11rem", height: "15rem" }} />
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{products.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${products.price}</h6>
                <p class="card-text">{products.description}</p>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
