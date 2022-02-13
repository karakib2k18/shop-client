import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SingleShopCard from "./SingleShopCard";
import PlaceOrderTable from "./PlaceOrderTable";

const SingleShop = () => {
  const { pdId } = useParams();
  const [singleshopslist, setSingleShopslist] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/shop")
      .then((response) => response.json())
      .then((data) => {
        // setSingleShopslist(data);
        // eslint-disable-next-line eqeqeq
        const singleshopslistId = data.find((fd) => fd._id == pdId);
        setSingleShopslist(singleshopslistId);
        setIsLoading(false);
      });
  }, [pdId]);

  return (
    <Box style={{ backgroundColor: "#eaeef2" }}>
      <Container sx={{ border: 0, py: 4 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5" component="div">
              <SingleShopCard shop={singleshopslist}></SingleShopCard>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PlaceOrderTable
              isLoading={isLoading}
              singleshopslist={singleshopslist}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleShop;
