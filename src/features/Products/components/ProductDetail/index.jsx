import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../../../api/productsApi";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const fetchProduct = await productsApi.get(id);
      setProduct(fetchProduct);
    };
    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>Product detail pagte</div>
      <h2 className="title">{product.title}</h2>
      <p className="desc">{product.description}</p>
    </>
  );
};

export default ProductDetail;
