import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";


function Copyright() {
  return (
    <Box>
      {" "}
      <Typography variant="body3" color="text.primary">
        {"Copyright © "} {new Date().getFullYear()}{" "}
        <Link color="inherit" href="kaziabdurrakib.com/">
          by KAZI ABDUR RAKIB
        </Link>{" "}
      </Typography>
      <Typography variant="body2" color="text.primary">
        All rights reserved.
      </Typography>
    </Box>
  );
}

const Footer = () => {
  return (
<Box style={{ backgroundColor: "#eaeef2"}}

      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 6,
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            
          >
            {/* About us */}
            <Grid item xs={2} sm={3} md={3} >
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  About us
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  It's RAKIB-JEWELLERS, a jewellery selling service base
                  website. We provide best service last fiv years. We have a lof
                  of amazing design's jewellery. Please have a look to our
                  products. Have a nice day.
                </Typography>
              </Typography>
            </Grid>
            {/* customer care */}
            <Grid item xs={2} sm={3} md={3}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Customer Care
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Refunds & Returns
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Privacy Policy
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Free Shipping
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Lifetime Warranty
                </Typography>
              </Typography>
            </Grid>
            {/* terms and condition */}
            <Grid item xs={2} sm={3} md={3}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Terms and conditions
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Privacy and Cookie
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Security & Statement
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Processor Agreement
                </Typography>
              </Typography>
            </Grid>
            {/* emergency contact */}
            <Grid item xs={2} sm={3} md={3}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Emergency Contact
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Dubai, UAE
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  New York, USA
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  London, UK
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
