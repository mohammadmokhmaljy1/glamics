import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

  // import components
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ClientLayout from "./Layouts/ClientLayout/ClientLayout.jsx"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Route>
    </Routes>
  )
}