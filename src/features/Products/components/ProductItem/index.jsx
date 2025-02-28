import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { productData } = props;
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ position: "relative", overflow: "hidden" }}>
          <img
            src={productData.thumbnail}
            alt={productData.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "120px",
            }}
          />
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {productData.category}
          </Typography>
          <Typography variant="h5" component="div">
            {productData.title}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}>
            shipping Information:&nbsp;
            {productData.shippingInformation}
          </Typography>
          <Typography variant="body2">{productData.description}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/products/${productData.id}`}>View More</Link>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductItem;
