import Modal from "../Modal/Modal";
import "./signInModal.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { getFavorites } from "../../utils/favoriteHandler";

const SignInModal = ({
  setSignInVisible,
  setSignUpVisible,
  setToken,
  setFavorites,
  setLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loadingButton) {
      setLoadingButton(true);
      try {
        const response = await axios.post(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/user/login",
          {
            email: email,
            password: password,
          }
        );
        Cookies.set("token", response.data.token, { expires: 30 });
        setToken(response.data.token);
        getFavorites(response.data.token, (data) => {
          setFavorites(data);
          setLoadingButton(false);
          setSignInVisible(false);
          setLoading(false);
          navigate("/");
        });
      } catch (error) {
        console.log(error);
        setLoadingButton(false);
      }
    }
  };

  return (
    <Modal toggleModal={setSignInVisible}>
      <h1>Se Connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Adresse email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button disabled={loadingButton}>Se Connecter</button>
      </form>
      <p
        onClick={() => {
          setSignUpVisible(true);
          setSignInVisible(false);
        }}
      >
        Pas encore de compte? Inscris-toi !
      </p>
    </Modal>
  );
};
export default SignInModal;
