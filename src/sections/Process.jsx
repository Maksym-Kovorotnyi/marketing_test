import React from "react";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import { Box, Typography } from "@mui/material";
import ProcessCards from "../components/processCards/ProcessCards";
import { ReactComponent as Star } from "../static/svg/processSvg.svg";

function Process() {
  return (
    <Section
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: "120px",
        backgroundColor: "secondary.light",
      }}
    >
      <Box display={"flex"} gap={"16px"}>
        <Star />
        <Typography
          variant="body2"
          children={"OUR PROCESS"}
          textTransform={"uppercase"}
          fontSize={16}
        />
      </Box>
      <Box
        maxWidth={"70%"}
        sx={{
          "&:not(:first-child)": {
            pt: "64px",
          },
        }}
      >
        <ProcessCards
          number={"01"}
          subtitle={"strategic PLANNING"}
          title={
            "Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business?"
          }
          menuText={
            "Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We\u0027ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level\u0027dand then craft a mastermind plan to roll it out."
          }
        />
        <ProcessCards
          number={"02"}
          subtitle={"creative EXECUTION"}
          title={
            "We believe in the marketing trifecta: visuals, copy, and technology."
          }
          menuText={
            "Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We\u0027dve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level\u002dand then craft a mastermind plan to roll it out."
          }
          paddingTop={"64px"}
        />
        <ProcessCards
          number={"03"}
          subtitle={"strategic PLANNING"}
          title={
            "In this day and age, having a strong online presence is like getting a good night\u0027s sleep\u002dit\u0027s just that important."
          }
          menuText={
            "Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We\u0027ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level\u0027dand then craft a mastermind plan to roll it out."
          }
          paddingTop={"64px"}
        />
      </Box>
    </Section>
  );
}

export default Process;
