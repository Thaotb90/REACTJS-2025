// import React from "react";
// import PropTypes from "prop-types";

// Header.propTypes = {};

// function Header(props) {
//   return <div>

//   </div>;
// }

// export default Header;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";

// import for dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Register from "../../features/Auth/components/Register";
import { DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const pages = [
  { path: "/products", title: "Products" },
  { path: "/todos", title: "Todo" },
  { path: "/albums", title: "Album" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [open, setOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "semibold",
                color: "white",
              }}
              to="/"
            >
              LOGO
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      <NavLink
                        style={{
                          color: "black",
                          display: "block",
                          textDecoration: "none",
                        }}
                        to={page.path}
                      >
                        {page.title}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <MenuItem key={page.path} sx={{ padding: 0 }}>
                  <MenuItem key={page.path}>
                    <Typography
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <NavLink
                        style={{
                          color: "white",
                          display: "block",
                          textDecoration: "none",
                        }}
                        to={page.path}
                      >
                        {page.title}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                </MenuItem>
              ))}
            </Box>
            <Box sx={{ mr: 2 }}>
              <Button
                onClick={handleClickOpen}
                sx={{ color: "white", background: "red" }}
              >
                Register
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dialog */}

      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CloseIcon
          onClick={handleClose}
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
            "&:hover": {
              color: "#1976d2",
            },
          }}
        />
        <AdbIcon
          sx={{
            display: "flex",
            color: "#1976d2",
            mt: 3,
            mx: "auto",
          }}
        />
        <DialogTitle textAlign={"center"} color="#1976d2">
          Register
        </DialogTitle>
        <DialogContent>
          <Register />
        </DialogContent>
      </Dialog>
    </>
  );
}
export default Header;
