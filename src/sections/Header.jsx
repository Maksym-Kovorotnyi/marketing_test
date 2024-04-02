import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography, Toolbar, Box } from "@mui/material";
import HeaderNav from "../components/headerNav/HeaderNav";
import Btn from "../components/button/Btn";

function Header() {
  return (
    <>
      <Toolbar component="header" sx={{}} disableGutters={true}>
        <Typography variant="subtitle1" children="PIPI-POOPOO"></Typography>
        <HeaderNav />
        <Box display={"flex"} alignItems={"center"} gap={"35px"}>
          <InstagramIcon />
          <Btn content={"LET'S CHAT"} />
        </Box>
      </Toolbar>
    </>
  );
}

export default Header;
