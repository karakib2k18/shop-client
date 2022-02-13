import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
// import { useHistory, useLocation } from "react-router";

const AddNewAdmin = () => {

  const { register, handleSubmit, reset } = useForm();
  // const history = useHistory();
  // const location = useLocation();
  // history.replace(history?.location?.pathname);
  // console.log("locairto222n" ,history?.location?.pathname)

  //send data to the server
  const onSubmit = (data) => {
    console.log(data);
    swal({
      title: "Do you want to add a Admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://tranquil-anchorage-09740.herokuapp.com/users/admin", {
          method: "PUT", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount) {
                // console.log(data);
              swal("You have Added a Admin", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              
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
    <Container sx={{ border: 0, py: 6 }} maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        ADD A NEW ADMIN
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>

              <Grid item xs={12}>

                  <TextField
                    {...register("email", { required: true })}
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
            >
              ADD NEW ADMIN
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default AddNewAdmin;
