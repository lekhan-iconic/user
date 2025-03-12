import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import StorageIcon from "@mui/icons-material/Storage";
import BackupIcon from "@mui/icons-material/Backup";
import SecurityIcon from "@mui/icons-material/Security";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -${drawerWidth}px,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: calc(100% - ${drawerWidth}px),
    marginLeft: ${drawerWidth}px,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState("dashboard"); // State to track page

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DBA Dashboard
          </Typography>
          {/* Logout Button */}
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Navigation Links */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedPage("dashboard")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="DBA Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedPage("keyTasks")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="DBA Key Tasks" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSelectedPage("Backup&Restoration")}
            >
              <ListItemIcon>
                <BackupIcon />
              </ListItemIcon>
              <ListItemText primary="Backup & Restore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedPage("Security")}>
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary="Security & Permissions" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {/* Conditional Rendering Based on Selection */}
        {selectedPage === "dashboard" && (
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DBA Dashboard Overview
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              This section contains an overview of DBA activities, recent logs,
              and system health.
            </Typography>
          </>
        )}

        {selectedPage === "keyTasks" && (
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DBA Key Tasks
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                Backup
              </Paper>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/backup"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Success
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/backup/failed"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Failed
                  </Link>
                </MenuItem>
              </Menu>

              <Paper
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Log Shipping
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Deadlock
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Indexing
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Archival
              </Paper>
            </Box>
          </>
        )}

        {selectedPage === "Backup&Restoration" && (
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Backup and Restoration Data
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              This section contains an overview of Backup and Restoration.
            </Typography>
          </>
        )}
        {selectedPage === "Security" && (
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Security and Permissions Data
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              This section contains an overview of Security and Permissions.
            </Typography>
          </>
        )}
      </Main>
    </Box>
  );
}