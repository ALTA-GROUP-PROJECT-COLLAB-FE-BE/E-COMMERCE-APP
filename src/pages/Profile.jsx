import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ProfileItems from "../components/ProfileItems";

function Profile() {
    const urlApi = "https://fakestoreapi.com/users/1";
    const [profiles, setProfile] = useState([]);
    const navigate = useNavigate();

    const getProfile = async () => {
        await axios
            .get(urlApi)
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => {
        getProfile();
    }, []);

    const handleEdit = (data) => {
        navigate(`/editprofile/${data.id}`, {
            state: {
                id: data.id,
            },
        });
    };
    const handleCreate = (data) => {
        navigate(`/createproduct/${data.id}`, {
            state: {
                id: data.id,
            }
        })
    }
    const handleLogOut = () => {

    }
    const handleOrder = (data) => {
        navigate(`/historyorder/${data.id}`, {
            state: {
                id: data.id,
            }
        })
    }
    const handleProduct = (data) => {
        navigate(`/myproduct/${data.id}`, {
            state: {
                id: data.id,
            }
        })
    }
    const handleRemove = (data) => {

    }

    return (
        <>
            <section>
                <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
                    <div className="row mx-auto">
                        <ProfileItems username={profiles.username} key={profiles.id} onClickEdit={() => handleEdit(profiles)}
                            onClickCreate={() => handleCreate(profiles)} onClickLogOut={() => handleLogOut()} onClickOrder={() => handleOrder()}
                            onClickProduct={() => handleProduct(profiles)} onClickRemove={() => handleRemove(profiles)} />;
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Profile;
