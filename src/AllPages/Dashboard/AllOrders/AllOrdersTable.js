import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button, CircularProgress, FormControl } from "@mui/material";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";

const AllOrdersTable = (props) => {
    const {allOrder, setAllOrdersList, allOrdersList,setIsLoading,isLoading} = props ;
  const [updateForm, setupdateForm] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [userUpdate, setUserUpdate] = React.useState({});

  const handleEditButton = (id) => {
    // reset();
    fetch(`https://tranquil-anchorage-09740.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // const statusUpdate = allBookings.filter(()=>allbook.data === data.status)
        setUserUpdate(data);
      });
  };

  const onSubmit = (data) => {
    // console.log(userUpdate._id);
    let updateStatus = { ...userUpdate };
    updateStatus.status = data.status;
    setUserUpdate(updateStatus);
    // console.log(updateStatus);

    const url = `https://tranquil-anchorage-09740.herokuapp.com/orders/${data._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((datan) => {
        if (datan.modifiedCount > 0) {
          setIsLoading(true);
          swal("Change successfully!!", "done", "success", {
            button: false,
            timer: 1300,
          });
          reset();
          setUserUpdate({});
          setIsLoading(false);
        }
      });

    setupdateForm(false);
  };

  const handleDeleteButton = (id) => {
    // console.log(allOrdersList._id);
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
                setIsLoading(true);
                // console.log(data)
              const remaining = allOrdersList.filter(
                (booking) => booking._id !== id
              );
              setAllOrdersList(remaining);
              setIsLoading(false);
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
    // <Box style={{ backgroundColor: "#eaeef2"}}>
    <TableRow
      key={allOrder?.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row" sx={{pb:5, fontWeight: "bold"}}>
        {allOrder?.fullname}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="center">
        {allOrder?.email}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="center">
        {allOrder?.phone}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="center">
        {allOrder?.address}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="center">
        {allOrder?.pdname}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="right">
        ${allOrder?.pdprice}
      </TableCell>
      <TableCell sx={{ fontSize: 18 }} align="right">
        {!updateForm && <Box
                      sx={{ p:1 , borderRadius: 1, fontWeight: "bold", color:"white", display: 'inline' , bgcolor: allOrder.status === "Pending"
                      // eslint-disable-next-line no-mixed-operators
                      && 'warning.main' || allOrder.status === "Deliverd" && 'success.main' || allOrder.status === "Rejected" && 'error.main' || allOrder.status === "Shipping" && 'secondary.main'}}
        >{allOrder?.status}</Box>}

        {updateForm && (
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth>
                <Select
                  {...register("status", { required: true })}
                  labelId="status"
                  id="status"
                  label="status"
                  required
                >
                  <MenuItem value="Deliverd">Deliverd</MenuItem>
                  <MenuItem value="Shipping">Shipping</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ m: 1, mb: 1, fontWeight: "bold" }}
                >
                  Update
                </Button>
              </FormControl>
            </form>
          </Box>
        )}
      </TableCell>
      {isLoading && <CircularProgress />}
      <TableCell sx={{ fontSize: 18 }} align="right">
        {!updateForm && (
          <Button
            type="submit"
            variant="contained"
            sx={{ m: 1, mb: 1, fontWeight: "bold" }}
            onClick={() => {
              setupdateForm(true);
              handleEditButton(allOrder?._id);
            }}
          >
            Edit
          </Button>
        )}

        <Button
          type="submit"
          id="customize-delete-id-byme"
          variant="contained"
          sx={{ m: 1, mb: 1, fontWeight: "bold" }}
          onClick={() => handleDeleteButton(allOrder?._id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
    // </Box>
  );
};

export default AllOrdersTable;
