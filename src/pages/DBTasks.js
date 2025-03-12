import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Menu, MenuItem, Paper } from "@mui/material";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import BackupIcon from "@mui/icons-material/Backup";
import StorageIcon from "@mui/icons-material/Storage";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ArchiveIcon from "@mui/icons-material/Archive";
import ListAltIcon from "@mui/icons-material/ListAlt";

const DBTasks = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = (event, menuType) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(menuType);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  const menuItems = {
    Backup: [
      { label: "Success", path: "/backup/success" },
      { label: "Failed", path: "/backup/failed" },
    ],
    "Log Shipping": [
      { label: "Status", path: "/logshipping/status" },
      { label: "Errors", path: "/logshipping/errors" },
    ],
    Indexing: [
      { label: "Rebuild Index", path: "/indexing/rebuild" },
      { label: "Fragmentation", path: "/indexing/fragmentation" },
    ],
    Archival: [
      { label: "History", path: "/archival/history" },
      { label: "Retention", path: "/archival/retention" },
    ],
  };

  const papers = [
    { name: "Backup", icon: <BackupIcon />, color: "#4CAF50" },
    { name: "Log Shipping", icon: <StorageIcon />, color: "#2196F3" },
    {
      name: "Deadlock",
      icon: <ReportProblemIcon />,
      color: "#f44336",
      noMenu: true,
    },
    { name: "Indexing", icon: <ListAltIcon />, color: "#FF9800" },
    { name: "Archival", icon: <ArchiveIcon />, color: "#9C27B0" },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Heading />

          {/* Centered h1 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <h1>DB Key Task Reports Data</h1>
          </Box>

          {/* Display all Paper components in a row */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              mt: 3,
            }}
          >
            {papers.map((paper) => (
              <Paper
                key={paper.name}
                elevation={3}
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: paper.color,
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  flex: "1 1 200px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                onClick={(event) =>
                  !paper.noMenu && handleClick(event, paper.name)
                }
              >
                {paper.icon} {paper.name}
              </Paper>
            ))}
          </Box>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {selectedMenu &&
              menuItems[selectedMenu]?.map((item) => (
                <MenuItem key={item.label} onClick={handleClose}>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default DBTasks;
