import React from "react";
import SquareIcon from "@mui/icons-material/Square";
import { Box, Typography } from "@mui/material";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import Btn from "../components/button/Btn";

function AboutUs() {
  return (
    <Section
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: "120px",
        pb: "200px",
        backgroundColor: "secondary.light",
        borderBottom: "none",
      }}
    >
      <Box display={"flex"} gap={"16px"}>
        <SquareIcon sx={{ width: "12px", height: "12px" }} />
        <Typography
          variant="body1"
          fontSize={16}
          children={"About us"}
          textTransform={"uppercase"}
        />
      </Box>
      <Box maxWidth={"65%"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h4" children={"Running a business means"} />
          <Typography
            variant="h4"
            children={"wearing a lot of hats."}
            textAlign={"end"}
          />
        </Box>
        <Box display={"flex"} gap={"32px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body2"
              children={
                "Do you have a million ideas for growth, but don\u0027t have the bandwidth to turn them into a reality? "
              }
              mb={"auto"}
            />
            <Btn content={"Contact us"} textTransform={"uppercase"} />
          </Box>
          <Typography
            variant="body2"
            children={
              "That\u0027s where we come in. We want to create a strategic communication plan and save you time by executing it for you. You need to do what you do best: focus on the parts of your entrepreneurial journey that inspire you. Leave the rest to us."
            }
            maxWidth={"540px"}
          />
        </Box>
      </Box>
    </Section>
  );
}

export default AboutUs;
