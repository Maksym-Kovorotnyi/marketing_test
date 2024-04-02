import { Box, Typography } from "@mui/material";
import React from "react";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Btn from "../button/Btn";

function FooterCallToAct() {
  return (
    <Box maxWidth={"600px"}>
      <Box display={"flex"} gap={"16px"} mb={"80px"}>
        <MapsUgcIcon />
        <Typography
          variant="body2"
          fontSize={"16px"}
          textTransform={"uppercase"}
          children={"Contact Us"}
        />
      </Box>
      <Typography variant="h3" mb={"100px"}>
        LET'S WORK <span>together</span>
      </Typography>
      <Btn content={"CONTACT US"} />
    </Box>
  );
}

export default FooterCallToAct;
