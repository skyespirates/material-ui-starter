import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, NavLink } from "react-router-dom";

import links from "@routes/links";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Skyesapp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              {links.map(({ to, title }, index) => (
                <ListItem key={index} disablePadding>
                  <NavLink to={to} style={{ display: "block", width: "100%" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={title} sx={{ color: "#fff" }} />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
