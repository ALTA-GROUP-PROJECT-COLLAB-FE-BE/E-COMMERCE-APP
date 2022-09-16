import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ProfileItems from "../components/ProfileItems";


function Profile() {
    const urlApi = "https://fakestoreapi.com/users/7";
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
        username: data.username,
        name: {
          firstname: data.name.firstname,
          lastname: data.name.lastname,
        },
        email: data.email,
      },
    });
  };
  const handleCreate = (data) => {
    navigate(`/create/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };


  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };

  const handleOrder = (data) => {
    navigate(`/historyorder/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };
  const handleProduct = (data) => {
    navigate(`/product/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };
  const handleRemove = (data) => {
          var axios = require('axios');

        var config = {
            method: 'delete',
            url: `http://3.86.24.153:8000/users/${data.id}`,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
  };

  return (
    <>
      <section>
        <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
          <div className="row mx-auto">
            <ProfileItems
              username={profiles.username}
              key={profiles.id}
              onClickEdit={() => handleEdit(profiles)}
              onClickCreate={() => handleCreate(profiles)}
              onClickOrder={() => handleOrder()}
              onClickProduct={() => handleProduct(profiles)}
              onClickRemove={() => handleRemove(profiles)}
              logoutHandler={()=>logoutHandler()}
            />
            ;
          </div>
        </Container>
      </section>
    </>
  );
}

export default Profile;
