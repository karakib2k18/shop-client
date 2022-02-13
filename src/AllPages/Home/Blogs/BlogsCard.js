import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const BlogsCard = ({blog}) => {
    // const url = `/singleblog/${blog?._id}`;
    // console.log(blog)
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 420, borderRadius: 8, p:2 }}>
          <CardMedia
            component="img"
            sx={{ width: "50%", height: "50%", mx: "auto" }}
            image={blog?.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{mt:3}}>
              {blog?.name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {blog?.description.slice(0, 100)}
            </Typography>
          </CardContent>
          <CardContent>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to='/shops'
            >
              <Button variant="contained" sx={{ fontWeight: "bold" }} style={{ backgroundColor: "#fdca00", color: "black" }}>
              Shop Now+
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    );
};

export default BlogsCard;