import { Box, Typography } from "@mui/material";
import React from "react";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import { ReactComponent as Encircle } from "../static/svg/aLot.svg";

function Title() {
  return (
    <Section
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        py: "55px",
        backgroundColor: "secondary.light",
      }}
    >
      <Typography variant="h2" children={"YOU HAVE"} noWrap />

      <Box position={"relative"}>
        <Typography
          variant="h2"
          fontStyle={"italic"}
          children={"a lot"}
          noWrap
        />
        <Encircle
          style={{
            position: "absolute",
            transform: "translate(-15%, -95%)",
          }}
        />
      </Box>
      <Typography variant="h2" children={"GOING ON."} noWrap />
    </Section>
  );
}

export default Title;
