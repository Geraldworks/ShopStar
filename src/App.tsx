import ProductPage from "./components/products/ProductPage";
import { Routes, Route } from "react-router-dom";
import SignupView from "./views/SignupView";
import SigninView from "./views/SigninView";
import Root from "./views/Root";
import Home from "./views/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/products" element={<Home />} />
      <Route path="/signin" element={<SigninView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
