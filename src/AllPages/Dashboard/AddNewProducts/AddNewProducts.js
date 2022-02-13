import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddNewProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  //send data to the server
  const onSubmit = (data) => {
    // console.log(data);
    swal({
      title: "Do you want to add a new Product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://tranquil-anchorage-09740.herokuapp.com/shop", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insertedId) {
              //   console.log(data);
              swal("You have Added a New Product", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              //   history.push("/home");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
    <Container sx={{ border: 0, py: 4 }} maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        ADD A NEW PRODUCT
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  {...register("name", { required: true })}
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description", { required: true })}
                  margin="normal"
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  {...register("image", { required: true })}
                  fullWidth
                  name="image"
                  label="image Link"
                  type="text"
                  id="image"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  {...register("price", { required: true })}
                  fullWidth
                  name="price"
                  label="Price"
                  type="number"
                  id="price"
                  required
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
            >
              ADD PRODUCT
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default AddNewProducts;
