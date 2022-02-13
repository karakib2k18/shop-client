import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import useAuth from "../../../hooks/useAuth";
import { Avatar } from "@mui/material";

const Navbar = () => {
  const dashboarduser = [
    { name: "My Orders", to: "/myorders", current: false },
    { name: "Give Review", to: "/givereview", current: false },
    // { name: "Payment Now", to: "/paymentnow", current: false },
  ];
  const dashboardadmin = [
    { name: "Add Products", to: "/addproducts", current: false },
    { name: "Manage All Products", to: "/manageallproducts", current: false },
    { name: "All Orders", to: "/allorders", current: false },
    { name: " Add New Admin", to: "/addnewadmin", current: false },
  ];
  const navlist = [
    { name: "Home", to: "/home", current: false },
    { name: "Shops", to: "/shops", current: false },
    { name: "Blogs", to: "/blogs", current: false },
  ];
  const { admin, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElp, setAnchorElp] = React.useState(null);

  const handleMenup = (event) => {
    setAnchorElp(event.currentTarget);
  };

  const handleClosep = () => {
    setAnchorElp(null);
  };
  const [anchorElpD, setAnchorElpD] = React.useState(null);

  const handleMenupD = (event) => {
    setAnchorElpD(event.currentTarget);
  };

  const handleClosepD = () => {
    setAnchorElpD(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#292a2d", color: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              JULO
            </Typography>

            {/* for mobile version */}

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    mt: "32px",
                    px: "20px",
                  }}
                >
                  {/* NAVBAR FOR DESKTOP */}
                  {navlist.map((item) => (
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to={item.to}
                    >
                      <MenuItem key={item.name}>
                        <Typography
                          onClick={handleClose}
                          sx={{
                            m: 1,
                          }}
                          variant="h6"
                          textAlign="center"
                        >
                          {item.name}
                        </Typography>
                      </MenuItem>
                    </NavLink>
                  ))}

                  {!(user?.displayName || user?.email) && (
                    <Box>
                      {/* NAVBAR FOR DESKTOP */}

                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to="/login"
                      >
                        <MenuItem>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              p: 1,
                              m: 1,
                            }}
                          >
                            Login
                          </Typography>
                        </MenuItem>
                      </NavLink>
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to="/signup"
                      >
                        <MenuItem>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              p: 1,
                              m: 1,
                            }}
                          >
                            SignUp
                          </Typography>
                        </MenuItem>
                      </NavLink>
                    </Box>
                  )}
                  {(user?.displayName || user?.email) && (
                    <Box>
                      {/* NAVBAR FOR DESKTOP */}
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to="/dashboard"
                      >
                        <MenuItem>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            onClick={logout}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              m: 1,
                            }}
                          >
                            Logout
                          </Typography>
                        </MenuItem>
                      </NavLink>
                    </Box>
                  )}
                </Menu>
              </div>
            </Box>

            {/* for mobile version end here */}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* NAVBAR FOR DESKTOP */}
              {navlist.map((item) => (
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={item.to}
                >
                  <MenuItem key={item.name}>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        m: 1,
                      }}
                      variant="h6"
                      textAlign="center"
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>
            {(user?.displayName || user?.email) && (
              <Box>
                <Typography
                  onClick={handleMenupD}
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    m: 1,
                  }}
                >
                  Dashboard
                </Typography>

                <Menu
                  sx={{ mt: "45px" }}
                  id="dashboard-appbar"
                  anchorEl={anchorElpD}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElpD)}
                  onClose={handleClosepD}
                >
                  {!admin && (
                    <Box>
                      {dashboarduser.map((item) => (
                        <NavLink
                          style={{ textDecoration: "none", color: "black" }}
                          to={item.to}
                        >
                          <MenuItem key={item.name}>
                            <Typography
                              textAlign="center"
                              onClick={handleClosepD}
                            >
                              {item.name}
                            </Typography>
                          </MenuItem>
                        </NavLink>
                      ))}
                    </Box>
                  )}
                  {admin && (
                    <Box>
                      {dashboardadmin.map((item) => (
                        <NavLink
                          style={{ textDecoration: "none", color: "black" }}
                          to={item.to}
                        >
                          <MenuItem key={item.name} to={item.to}>
                            <Typography
                              textAlign="center"
                              onClick={handleClosepD}
                            >
                              {item.name}
                            </Typography>
                          </MenuItem>
                        </NavLink>
                      ))}
                    </Box>
                  )}
                </Menu>
              </Box>
            )}

            {/* if login the all button show in desktop */}
            {(user?.displayName || user?.email) && (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/home"
                >
                  <MenuItem>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      onClick={logout}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        m: 1,
                      }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </NavLink>
              </Box>
            )}

            {/* if not login then login singup show in desktop */}
            {!(user?.displayName || user?.email) && (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {/* NAVBAR FOR DESKTOP */}

                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  <MenuItem>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        m: 1,
                      }}
                    >
                      Login
                    </Typography>
                  </MenuItem>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/signup"
                >
                  <MenuItem>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        m: 1,
                      }}
                    >
                      SignUp
                    </Typography>
                  </MenuItem>
                </NavLink>
              </Box>
            )}
            {/* if login the picture and details show in desktop */}
            {(user?.displayName || user?.email) && (
              <Box>
                <Avatar
                  alt="Remy Sharp"
                  src={user?.photoURL}
                  onClick={handleMenup}
                />
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElp}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElp)}
                  onClose={handleClosep}
                >
                  <MenuItem onClick={handleClosep}>
                    {user?.displayName}
                  </MenuItem>
                  <MenuItem onClick={handleClosep}>{user?.email}</MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
