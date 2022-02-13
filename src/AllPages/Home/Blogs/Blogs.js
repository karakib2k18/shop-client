import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BlogsCard from "./BlogsCard";
import Footer from "../../Shared/Footer/Footer";

const Blogs = () => {
  const [blogslist, setBlogsslist] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/blogs")
      .then((response) => response.json())
      .then((json) => {
        setBlogsslist(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
<Container sx={{ border: 0 }} maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div" sx={{ py: 4 }}>
        Blogs Page
      </Typography>
      {isLoading && <CircularProgress />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {blogslist.map((blog, index) => (
            <BlogsCard blog={blog} key={blog?._id}></BlogsCard>
          ))}
        </Grid>
      </Box>
    </Container>
    <Footer></Footer>
</Box>
  );
};

export default Blogs;
