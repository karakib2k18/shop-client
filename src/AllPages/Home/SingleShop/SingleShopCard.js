import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const commonStyles = {
    bgcolor: 'background.paper',
    pt: 1,
    border: 1,
  };


const SingleShopCard = ({shop}) => {
    return (
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
        </Card>
    );
};

export default SingleShopCard;