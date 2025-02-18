import { useEffect, useState } from "react";
import productsApi from "../../api/productsApi";
import ProductList from "./components/ProductList";

function ProductPage(props) {
  const [productList, setProductList] = useState([]);

  // useEffect để fetch productList 1 lần duy nhất khi component được mount
  useEffect(() => {
    const getProduct = async () => {
      const fetchProductList = await productsApi.getAll();
      if (fetchProductList && fetchProductList.products.length > 0) {
        setProductList(fetchProductList.products);
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <h3 className="product__title">Product page</h3>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductPage;
