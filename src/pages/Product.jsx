import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Style/Product.css";
import MyProduct from "../components/MyProduct";


function Product() {
  const urlApi = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

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
  }, []);

  const handleEditPage = (product) => {
    navigate(`/edit/${product.id}`, {
      state: {
        id: product.id,
      },
    });
  };

  return (
    <>
      <section>
        <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
            <div className="judul">
                <h1 className="title">My Product</h1>
            </div>
          <div className="row mx-auto">
            {product.map((product) => {
              return <MyProduct image={product.image} price={product.price} title={product.title} key={product.id} 
              onClickDetail={() => handleEditPage(product)} />;
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Product;