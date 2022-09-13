import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CardItems from "../components/CardItems";
import CarouselHead from "../components/CarouselHead";

function Home() {
  const urlApi = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
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

  const handleDetailPage = (product) => {
    navigate(`/detail/${product.id}`, {
      state: {
        id: product.id,
      },
    });
  };

  return (
    <>
      <CarouselHead />
      <section>
        <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
          <div className="row mx-auto">
            {products.map((product) => {
              return <CardItems image={product.image} price={product.price} title={product.title} key={product.id} onClickDetail={() => handleDetailPage(product)} />;
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
