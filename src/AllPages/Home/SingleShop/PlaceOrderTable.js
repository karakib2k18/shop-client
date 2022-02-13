import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const PlaceOrderTable = (props) => {
    const { name, price } = props.singleshopslist;
    const {isLoading} = props.isLoading ;
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
  //send data to the server
  const onSubmit = (data) => {
    data.status = "Pending";
    // console.log(data);
    swal({
      title: "Do you want to Place Order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://tranquil-anchorage-09740.herokuapp.com/orders", {
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
              swal("You have Placed a new Order", "Well Done!", {
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {user?.displayName && (
              <TextField
                margin="normal"
                {...register("fullname", { required: true })}
                fullWidth
                name="fullname"
                label="Full Name"
                defaultValue={user?.displayName}
                type="text"
                id="fullname"
                required
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
                label="Email Address"
                name="email"
                required
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {name && (
              <TextField
                margin="normal"
                {...register("pdname", { required: true })}
                fullWidth
                name="pdname"
                label="Product Name"
                defaultValue={name}
                type="text"
                id="pdname"
                required
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {price && (
              <TextField
                margin="normal"
                {...register("pdprice", { required: true })}
                fullWidth
                name="pdprice"
                label="Price"
                defaultValue={price}
                type="number"
                id="pdprice"
                required
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              {...register("phone", { required: true })}
              fullWidth
              name="phone"
              label="phone"
              type="number"
              id="phone"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("address", { required: true })}
              id="address"
              label="address"
              multiline
              margin="normal"
              name="address"
              rows={4}
              fullWidth
              type="text"
            />
          </Grid>
        </Grid>
        {isLoading && <CircularProgress />}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
        >
          Place Order
        </Button>
      </form>
    );
};

export default PlaceOrderTable;