import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Grid, Typography } from "@mui/material";

import AllOrdersTable from "./AllOrdersTable";
import { Box } from "@mui/system";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/orders")
      .then((response) => response.json())
      .then((json) => {
        setAllOrdersList(json);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
      <Typography  sx={{py:5}} gutterBottom variant="h5" component="div">
       All Orders
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={10} sm={10} sx={{pb:10, fontWeight: "bold"}}>
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
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrdersList?.map((allOrder) => (
                  <AllOrdersTable
                  setAllOrdersList={setAllOrdersList}
                    allOrdersList={allOrdersList}
                    allOrder={allOrder}
                    key={allOrder._id}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                  ></AllOrdersTable>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
      </Grid>
    </Box>
  );
};

export default AllOrders;
