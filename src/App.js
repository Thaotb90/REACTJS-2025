import { Routes, Route } from "react-router-dom";
import "./App.css";

import productsApi from "./api/productsApi";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import ProductPage from "./features/Products";

function App() {
  // demo get API:
  const productList = async () => {
    // const params = {total: }
    const getAllProduct = await productsApi.getAll();
    console.log("test API product: ", getAllProduct);

    // const get
  };
  productList();
  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
      <Routes>
        <Route path="/" element={<ProductPage />}>
          Product
        </Route>
        <Route path="/albums" element={<AlbumFeature />}>
          Album
        </Route>
        <Route path="/todos" element={<TodoFeature />}>
          Todo
        </Route>
      </Routes>
    </div>
  );
}

export default App;
