import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from "@mui/system";

const commonStyles = {
    bgcolor: 'background.paper',
    pt: 1,
    border: 1,
  };

const ShopCard = ({shop}) => {
    const url = `/singleshop/${shop?._id}`;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 420, borderRadius: 8, p:2 }}>
          <CardMedia
            component="img"
            sx={{ width: "50%", height: "50%", mx: "auto" }}
            image={shop?.image}
            alt="green iguana"
          />
          <CardContent>
              <Box sx={{ ...commonStyles, borderRadius: '16px', mx: "auto",  width: "60%" }} >
              <Typography gutterBottom variant="h6" component="div" >
             Price: ${shop?.price} USD
            </Typography>
              </Box>

            <Typography gutterBottom variant="h5" component="div" sx={{mt:3}}>
              {shop?.name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {shop?.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={url}
            >
              <Button variant="contained"  sx={{ fontWeight: "bold" }}  style={{ backgroundColor: "#fdca00", color: "black" }}>
               <AddShoppingCartIcon/>  Add to Card
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    );
};

export default ShopCard;