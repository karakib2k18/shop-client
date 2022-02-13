import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import swal from "sweetalert";

const commonStyles = {
    bgcolor: 'background.paper',
    pt: 1,
    border: 1,
  };

const ManageAllProductsCard = (props) => {
    const {shop,shopslist,setShopslist} =props ;
    // console.log(shop)
    const handleDeleteButton = (id) => {
        console.log(id);
        swal({
          title: "Do you want delete?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            fetch(`https://tranquil-anchorage-09740.herokuapp.com/shop/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  const remaining = shopslist.filter(
                    (booking) => booking._id !== id
                  );
                  setShopslist(remaining);
                  swal("You have Successfully Delete Orders!", "Well Done!", {
                    icon: "success",
                    timer: 1220,
                  });
                }
              });
          }
        });
      };
    return (
        <Grid item xs={4} sm={4} md={3}>
        <Card sx={{ maxWidth: 420, borderRadius: 8, p:2 }}>
          <CardMedia
            component="img"
            sx={{ width: "50%", height: "50%", mx: "auto" }}
            image={shop?.image}
            alt="green iguana"
          />
          <CardContent>
              <Box sx={{ ...commonStyles, borderRadius: '16px', mx: "auto",  width: "60%" }} >
              <Typography gutterBottom variant="body2" component="div" >
             Price: ${shop?.price} USD
            </Typography>
              </Box>

            <Typography gutterBottom variant="h6" component="div" sx={{mt:3}}>
              {shop?.name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {shop?.description}
            </Typography>
          </CardContent>
          <CardContent>
          <Button
                      type="submit"
                      id="customize-delete-id-byme"
                      variant="contained"
                      sx={{ m: 1, mb: 1, fontWeight: "bold" }}
                      onClick={() => handleDeleteButton(shop?._id)}
                    >
                      Delete
                    </Button>
          </CardContent>
        </Card>
      </Grid>
    );
};

export default ManageAllProductsCard;