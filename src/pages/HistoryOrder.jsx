import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import OrderItems from "../components/OrderItems";

function Profile() {
    const urlApi = "https://fakestoreapi.com/users/1";
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        await axios
            .get(urlApi)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => {
        getOrders();
    }, []);

    const handleRemove = (data) => {

    }

    return (
        <>
            <section>
                <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
                    <OrderItems />
                    {/*
                 {orders.map((order)=>{
                    
                        return <OrderItems username={profiles.username} key={profiles.id}onClickRemove={() => handleRemove(orders)} />;
                 })}*/}
                </Container>
            </section>
        </>
    );
}

export default Profile;
