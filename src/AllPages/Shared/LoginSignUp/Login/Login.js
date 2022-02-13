import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from "@mui/material/Avatar";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const theme = createTheme();

const Login = () => {
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    loginUser(data.email, data.password, location, history);
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
            py: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }} style={{ backgroundColor: "teal"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
            <TextField
              {...register("email", { required: true })}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              required
            />
            {/* {errors.email && (
              
              <Alert fullWidth severity="error"> Email is required</Alert>
            )} */}

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
            {/* {errors.password && (
               <Alert fullWidth severity="error">  Password is required</Alert>
            )} */}
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link
                  to="/signup"
                  variant="body2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {"Create a New Account?"}
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
              Sign In
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, fontWeight: "bold" }}
              onClick={handleGoogleSignIn}
              style={{ backgroundColor: "teal"}}
            >
              Sign With Google
            </Button>
            {/* </Box> */}
          </form>
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
  );
};
export default Login;
