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
import ComicPage from "./pages/ComicPage/ComicPage";
import { useFetchDataToken } from "./utils/useFetchData";
import CharacterPage from "./pages/CharacterPage/Characterpage";
import BackgroundSlide from "./components/BackgroundSlide/BackgroundSlide";

//site--marvel-backend--h7xf99wskwy6.code.run
const App = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("token"));
  const [favorites, setFavorites] = useState([]);
  useFetchDataToken(
    "https://site--marvel-backend--h7xf99wskwy6.code.run/user/favorites",
    token,
    (data) => {
      console.log("ici");

      setLoading(false);
      setFavorites(data);
    }
  );

  return (
    <div className="App">
      <Router>
        <Header
          setSignInVisible={setSignInVisible}
          setSignUpVisible={setSignUpVisible}
          setToken={setToken}
          token={token}
        />
        <BackgroundSlide />
        <Routes>
          <Route
            path="/characters"
            element={
              <CharactersPage
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <ComicsPage
                favorites={favorites}
                setFavorites={setFavorites}
                token={token}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                token={token}
                favorites={favorites}
                setFavorites={setFavorites}
                loading={loading}
              />
            }
          />
          <Route
            path="/comic/:comicId"
            element={
              <ComicPage
                token={token}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="/character/:characterId"
            element={
              <CharacterPage
                token={token}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route path="*" element={<Navigate to="/characters" />} />
        </Routes>
        {signUpVisible && (
          <SignUpModal
            setSignUpVisible={setSignUpVisible}
            setSignInVisible={setSignInVisible}
            setToken={setToken}
            setLoading={setLoading}
          />
        )}
        {signInVisible && (
          <SignInModal
            setSignUpVisible={setSignUpVisible}
            setSignInVisible={setSignInVisible}
            setFavorites={setFavorites}
            setToken={setToken}
            setLoading={setLoading}
          />
        )}
      </Router>
    </div>
  );
};

export default App;
