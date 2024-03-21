import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useNav from "./useNav";
import "../../App.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const NavBar = ({ onHomeClick, onContactCLick, onAboutClick, page }) => {
  const { window } = "";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }} height={"100px"}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={(e) => {
              e.preventDefault();
              handleDrawerToggle();
              onHomeClick();
            }}
          >
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={(e) => {
              e.preventDefault();
              handleDrawerToggle();
              onAboutClick();
            }}
          >
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={(e) => {
              e.preventDefault();
              handleDrawerToggle();
              onContactCLick();
            }}
          >
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex" }}
      style={{
        background:
          "linear-gradient(130deg, black 0%, #272727 44%, #494949 100%, #727272 100%)",
      }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "rgb(30,30,30)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color={"orange"}
            className="poppin"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Rehaman Shaik
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{
                color: page === "Home" ? "orange" : "#fff",
                "&:hover": { color: "orange", background: "rgb(30,30,30)" },
                borderBottom: page == "Home" ? "3px solid orange" : null,
                borderRadius: "0px",
                marginRight: "10px",
              }}
              onClick={(e) => {
                e.preventDefault();
                onHomeClick();
              }}
            >
              HOME
            </Button>
            <Button
              sx={{
                color: page == "About" ? "orange" : "#fff",
                "&:hover": { color: "orange", background: "rgb(30,30,30)" },
                borderBottom: page == "About" ? "3px solid orange" : null,
                borderRadius: "0px",
                marginRight: "10px",
              }}
              onClick={(e) => {
                e.preventDefault();
                onAboutClick();
              }}
            >
              ABOUT
            </Button>
            <Button
              sx={{
                color: page == "Contact" ? "orange" : "#fff",
                "&:hover": { color: "orange", background: "rgb(30,30,30)" },
                borderBottom: page == "Contact" ? "3px solid orange" : null,
                borderRadius: "0px",
                marginRight: "10px",
              }}
              onClick={(e) => {
                e.preventDefault();
                onContactCLick();
              }}
            >
              CONTACT ME
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
