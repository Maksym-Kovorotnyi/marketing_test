import React from "react";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import { ReactComponent as TestimonialsSvg } from "../static/svg/testimonialsSvg.svg";
import SwiperComponent from "../components/swiperComponent/SwiperComponent";
import { Box, Typography } from "@mui/material";

function Testimonials() {
  return (
    <Section
      sx={{
        pb: "120px",
        pt: "120px",
        pr: 0,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box display={"flex"} gap={"16px"} mb={"50px"}>
        <TestimonialsSvg />
        <Typography
          variant="body2"
          fontSize={"16px"}
          textTransform={"uppercase"}
          children={"Testimonials"}
        />
      </Box>
      <SwiperComponent />
    </Section>
  );
}

export default Testimonials;
