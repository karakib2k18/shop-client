import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrdersList, setMyOrdersList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`https://tranquil-anchorage-09740.herokuapp.com/myorders/${user.email}`)
      .then((response) => response.json())
      .then((json) => {
        setMyOrdersList(json);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleDeleteButton = (id) => {
    // console.log(id);
    swal({
      title: "Do you want delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://tranquil-anchorage-09740.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = myOrdersList.filter(
                (booking) => booking._id !== id
              );
              setMyOrdersList(remaining);
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
    <Box style={{ backgroundColor: "#eaeef2"}}>
    <Typography  sx={{mb:5}} gutterBottom variant="h5" component="div">
     My Orders
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={10}>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            {isLoading && <CircularProgress />}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 22 }}>Name</TableCell>
                <TableCell sx={{ fontSize: 22 }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="center">
                  Phone
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="center">
                  Address
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="center">
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  Status
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrdersList?.map((myOrder) => (
                <TableRow
                  key={myOrder?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {myOrder?.fullname}
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{myOrder?.email}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{myOrder?.phone}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{myOrder?.address}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{myOrder?.pdname}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">${myOrder?.pdprice}</TableCell>
                  <TableCell id='myorderedit' sx={{ fontSize: 18, p:1 , borderRadius: 1, fontWeight: "bold", color:"white", display: 'inline' , bgcolor: myOrder?.status === "Pending"
                      // eslint-disable-next-line no-mixed-operators
                      && 'warning.main' || myOrder?.status === "Deliverd" && 'success.main' || myOrder?.status === "Rejected" && 'error.main' || myOrder?.status === "Shipping" && 'secondary.main' }} align="right">{myOrder?.status}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">
                    <Button
                      type="submit"
                      id="customize-delete-id-byme"
                      variant="contained"
                      sx={{ m: 1, mb: 1, fontWeight: "bold" }}
                      onClick={() => handleDeleteButton(myOrder?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
    </Grid>
    </Box>
  );
};

export default MyOrders;
