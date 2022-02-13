import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ShopCard from "./ShopCard";
import Footer from "../../Shared/Footer/Footer";

const AllShop = () => {
  const [shopslist, setShopslist] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/shop")
      .then((response) => response.json())
      .then((json) => {
        setShopslist(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
<Container sx={{ border: 0 }} maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div" sx={{ py: 4 }}>
        Our All Products
      </Typography>
      {isLoading && <CircularProgress />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shopslist.map((shop, index) => (
            <ShopCard shop={shop} key={shop?._id}></ShopCard>
          ))}
        </Grid>
      </Box>
    </Container>
    <Footer></Footer>
</Box>
  );
};

export default AllShop;
