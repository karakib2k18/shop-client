import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const GiveReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  //send data to the server
  const onSubmit = (data) => {
    // console.log(data);
    swal({
      title: "Do you want to add a Review?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://tranquil-anchorage-09740.herokuapp.com/review", {
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
              swal("You have Added a Review", "Well Done!", {
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
  const [ratings, setRatings] = React.useState("");

  const handleChange = (event) => {
    setRatings(event.target.value);
  };

  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
    <Container sx={{ border: 0, pt: 4 }} maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        ADD A NEW REVIEW
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {user?.displayName && (
                  <TextField
                    margin="normal"
                    {...register("name", { required: true })}
                    fullWidth
                    name="name"
                    label="Name"
                    type="text"
                    id="name"
                    defaultValue={user?.displayName}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {user?.email && (
                  <TextField
                    {...register("email", { required: true })}
                    margin="normal"
                    fullWidth
                    id="email"
                    defaultValue={user?.email}
                    label="Email"
                    name="email"
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {user?.photoURL && (
                  <TextField
                    margin="normal"
                    {...register("image", { required: true })}
                    fullWidth
                    name="image"
                    label="image Link"
                    type="text"
                    id="image"
                    defaultValue={user.photoURL}
                  />
                )}
                {!user?.photoURL && (
                  <TextField
                    margin="normal"
                    {...register("image", { required: true })}
                    fullWidth
                    name="image"
                    label="image Link"
                    type="text"
                    id="image"
                    defaultValue="https://i.ibb.co/sbXDnbj/images.png"
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description", { required: true })}
                  id="description"
                  label="Description"
                  multiline
                  margin="normal"
                  name="description"
                  rows={4}
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
                    <Select
                      {...register("ratings", { required: true })}
                      labelId="ratings"
                      id="ratings"
                      value={ratings}
                      label="ratings"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              style={{ backgroundColor: "#fdca00", color: "black" }}
            >
              ADD REVIEW
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default GiveReview;
