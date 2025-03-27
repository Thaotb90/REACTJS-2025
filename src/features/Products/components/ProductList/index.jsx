import "./style.scss";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import productsApi from "../../../../api/productsApi";

function ProductList() {
  const [productList, setProductList] = useState([]);

  // useEffect để fetch productList 1 lần duy nhất khi component được mount
  useEffect(() => {
    const getProduct = async () => {
      const params = {
        limit: 10,
      };
      const fetchProductList = await productsApi.getAll(params);
      if (fetchProductList && fetchProductList.products.length > 0) {
        setProductList(fetchProductList.products);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="products">
      {productList?.map((product) => {
        return (
          <div className="products__item" key={product.id}>
            <ProductItem productData={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
