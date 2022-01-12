import ContentProduct from "./components/content-product/content-product";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import ViewProduct from "./components/content-product/view-product";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/products" element={<ContentProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/product/:id" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
