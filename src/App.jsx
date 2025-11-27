import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import ComicsPage from "./pages/ComicsPage/ComicsPage";
import Header from "./components/Header/Header";
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import { useState } from "react";
import Cookies from "js-cookie";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

//site--marvel-backend--h7xf99wskwy6.code.run
const App = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [token, setToken] = useState(Cookies.get("token"));

  return (
    <div className="App">
      <Router>
        <Header
          setSignInVisible={setSignInVisible}
          setSignUpVisible={setSignUpVisible}
          setToken={setToken}
          token={token}
        />
        <Routes>
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/favorites" element={<FavoritesPage token={token} />} />
          <Route path="*" element={<Navigate to="/characters" />} />
        </Routes>
        {signUpVisible && (
          <SignUpModal
            setSignUpVisible={setSignUpVisible}
            setSignInVisible={setSignInVisible}
            setToken={setToken}
          />
        )}
        {signInVisible && (
          <SignInModal
            setSignUpVisible={setSignUpVisible}
            setSignInVisible={setSignInVisible}
            setToken={setToken}
          />
        )}
      </Router>
    </div>
  );
};

export default App;
