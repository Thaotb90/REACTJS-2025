import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import AlbumFeature from "./features/Album";
import ProductPage from "./features/Products";
import ProductDetail from "./features/Products/components/ProductDetail";
import TodoFeature from "./features/Todo";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  // demo get API:
  // useEffect(() => {
  //   const productList = async () => {
  //     const getAllProduct = await productsApi.getAll();
  //   };
  //   productList();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />}>
          Product
        </Route>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/albums" element={<AlbumFeature />}>
          Album
        </Route>
        <Route path="/todos" element={<TodoFeature />}>
          Todo
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
