import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/CharactersPage";

//site--marvel-backend--h7xf99wskwy6.code.run
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
