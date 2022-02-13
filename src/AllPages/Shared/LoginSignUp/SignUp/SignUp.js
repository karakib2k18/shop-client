import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const theme = createTheme();

const SignUp = () => {
  const { user, registerUser, isLoading, authError,signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
  //   if (data.password !== data.password2) {
  //     alert('Your password did not match');
  //     return
  // }
    registerUser(data.email, data.password, data.fullname, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            py: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }} style={{ backgroundColor: "teal"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>

              <TextField
                margin="normal"
                {...register("fullname", { required: true })}
                fullWidth
                name="fullname"
                label="Full Name"
                type="fullname"
                id="fullname"
                required
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                required
              />
              </Grid>
              <Grid item xs={12}>

              <TextField
                margin="normal"
                {...register("password", { required: true })}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                required
              />
{/* 
              <TextField
                margin="normal"
                {...register("password2", { required: true })}
                fullWidth
                name="passwor2"
                label="RE-Password"
                type="password"
                id="password"
                required
              /> */}
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link
                  to="/login"
                  variant="body2"
                  sx={{ fontSize: [19, "!important"] }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              style={{ backgroundColor: "teal"}}
            >
              Sign Up
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, fontWeight: "bold" }}
              onClick={handleGoogleSignIn}
              style={{ backgroundColor: "teal"}}
            >
              Sign With Google
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
  );
};
export default SignUp;
