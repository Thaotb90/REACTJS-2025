import ProductList from "./components/ProductList";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function ProductPage(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} lg={3}>
          <Paper>
            <Item>Sidebar</Item>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} lg={9}>
          <Paper>
            <ProductList />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductPage;
