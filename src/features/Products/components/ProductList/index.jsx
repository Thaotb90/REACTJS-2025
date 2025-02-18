import "./style.scss";
import React from "react";
import ProductItem from "../ProductItem";

function ProductList(props) {
  console.log("show props: ", props.productList);
  return (
    <div className="products">
      {props.productList.map((product) => {
        console.log("rop: ", product);
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
