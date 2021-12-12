import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Suppliers from './pages/Suppliers';
import ProductType from './pages/ProductType';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/home-page" element={<HomePage/>} />
        <Route path="/fornecedores" element={<Suppliers/>} />
        <Route path="/tipos" element={<ProductType/>} />
        <Route element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
