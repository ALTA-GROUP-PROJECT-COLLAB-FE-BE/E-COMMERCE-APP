import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import CardItems from "../components/CardItems";
import CarouselHead from "../components/CarouselHead";

function Home() {
  const urlApi = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <CarouselHead />
      <section>
        <Container className="my-5 px-auto border border-5 rounded border-main justify-center align-items-center">
          <div className="row row-cols-4 mx-auto">
            {products.map((product) => {
              return <CardItems image={product.image} price={product.price} title={product.title} key={product.id} />;
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
