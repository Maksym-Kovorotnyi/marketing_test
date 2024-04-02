import { Box, Typography } from "@mui/material";
import React from "react";
import Btn from "../components/button/Btn";
import { Section } from "../muiThemeConfig/muiThemeConfig";

function Hero() {
  return (
    <Section sx={{ pb: "65px" }}>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="body2"
            children={"a full-service design & marketing agency."}
            maxWidth={"253px"}
          />
          <Typography
            variant="h2"
            children={"Check"}
            fontSize={"154px"}
            letterSpacing={"-8px"}
            lineHeight={"100%"}
            textTransform={"uppercase"}
          ></Typography>
          <Box display={"flex"} flexDirection={"column"} maxWidth={"396px"}>
            <Typography
              variant="body1"
              children={
                "Grow your business without adding more to your plate. "
              }
            />
            <Typography
              variant="subtitle1"
              fontSize={24}
              children={"You deserve support."}
            />
          </Box>
        </Box>
        <Typography
          variant="h1"
          children={"marketing"}
          textAlign={"end"}
        ></Typography>
        <Box
          display={"flex"}
          alignItems={"end"}
          justifyContent={"space-between"}
        >
          <Btn content={"talk to an expert"} />
          <Typography
            variant="h2"
            children={"off your list."}
            fontSize={"154px"}
            letterSpacing={"-8px"}
            lineHeight={"100%"}
            textTransform={"uppercase"}
          ></Typography>
        </Box>
      </Box>
    </Section>
  );
}

export default Hero;
