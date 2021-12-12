import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage.js';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/home-page" element={<HomePage/>} />
        <Route element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
