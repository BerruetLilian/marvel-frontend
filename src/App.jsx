import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/CharactersPage";

//site--marvel-backend--h7xf99wskwy6.code.run
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="*" element={<Navigate to="/characters" />} />
      </Routes>
    </Router>
  );
};

export default App;
