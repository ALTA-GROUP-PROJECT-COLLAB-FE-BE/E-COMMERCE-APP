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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios
        .get(urlApi)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-center vh-100">
          <div className="spinner-border text-success " role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
      </>
    );
  };

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
        <Container className="my-5 py-5 px-auto rounded border-main justify-content-center align-items-center">
          {loading ? (
            <Loading />
          ) : (
            <div className="row">
              <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
              </div>
              {products.map((product) => {
                return <CardItems image={product.image} price={product.price} title={product.title} key={product.id} onClickDetail={() => handleDetailPage(product)} />;
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default Home;
