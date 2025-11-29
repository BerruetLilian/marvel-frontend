import "./signUpModal.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const SignUpModal = ({ setSignUpVisible, setSignInVisible, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://site--marvel-backend--h7xf99wskwy6.code.run/user/signup",
          {
            email: email,
            password: password,
          }
        );
        Cookies.set("token", response.data.token, { expires: 30 });
        setToken(response.data.token);
        setLoading(false);
        setSignUpVisible(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <Modal toggleModal={setSignUpVisible}>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
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
        <button disabled={loading}>S'inscrire</button>
      </form>
      <p
        onClick={() => {
          setSignUpVisible(false);
          setSignInVisible(true);
        }}
      >
        Tu as déjà un compte? Connecte-toi!
      </p>
    </Modal>
  );
};
export default SignUpModal;
