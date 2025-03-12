import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Heading from "../components/Heading";

import BackupSucess from "../components/BackupSucess";

const BSucess = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Heading />
          <BackupSucess />
        </Box>
      </Box>
    </>
  );
};

export default BSucess;
