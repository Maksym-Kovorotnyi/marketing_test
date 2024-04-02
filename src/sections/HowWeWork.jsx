import React from "react";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import imageUrl from "../static/images/People@1x.png";
import HowWeWorkCards from "../components/howWeWorkCards/HowWeWorkCards";
import { ReactComponent as CreativeVector } from "../static/svg/creativeVector.svg";
import leftBackImg from "../static/images/backBooks1@1x.png";
import leftFrontImg from "../static/images/frontLaptop@1x.png";
import centerFrontImg from "../static/images/book@1x.png";
import rightFrontImg from "../static/images/smartPhone@1x.png";

function HowWeWork() {
  return (
    <Section
      sx={{ pr: 0, pl: 0, pt: "115px", borderBottom: "none" }}
      position={"relative"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"16px"}
        alignItems={"center"}
        mb={"80px"}
      >
        <CircleRoundedIcon
          color="text.primary"
          sx={{ width: "12px", height: "12px" }}
        />
        <Typography
          variant="body1"
          children={"HOW WE WORK"}
          textTransform={"uppercase"}
          fontSize={16}
        />
      </Box>
      <Box
        maxWidth={"1394px"}
        mr={"auto"}
        ml={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ transform: "translateY(35px)" }}
      >
        <Typography
          variant="h3"
          textTransform={"uppercase"}
          children={"YOUR BUSINESS NEEDS"}
        />
        <Box
          display={"flex"}
          alignItems={"baseline"}
          justifyContent={"center"}
          gap={"10px"}
          width={"100%"}
        >
          <Typography
            variant="subtitle2"
            children={"a strategic"}
            fontSize={96}
            textTransform={"lowercase"}
          />
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            children={"PLAN,"}
          />
          <Box position={"relative"}>
            <Typography
              variant="subtitle2"
              children={"creative"}
              fontSize={96}
              textTransform={"lowercase"}
            />
            <CreativeVector style={{ position: "absolute" }} />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"baseline"}
          justifyContent={"center"}
          gap={"10px"}
          width={"100%"}
        >
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            children={"EXECUTION, &"}
          />
          <Typography
            variant="subtitle2"
            children={"steady"}
            fontSize={96}
            textTransform={"lowercase"}
          />
        </Box>
        <Typography
          variant="h3"
          textTransform={"uppercase"}
          children={"SUPPORT TO GROW."}
          zIndex={"1"}
        />
      </Box>
      <Card
        sx={{
          width: "100%",
          height: 960,
          backgroundColor: "secondary.light",
        }}
      >
        <CardMedia
          image={imageUrl}
          sx={{
            width: "100%",
            height: 960,
          }}
        />
      </Card>
      <Box display={"flex"} sx={{ backgroundColor: "secondary.light" }}>
        <HowWeWorkCards
          text={"Our 1\u002dday design services"}
          title={"I need a visual revamp asap"}
          frontImage={leftFrontImg}
          backImage={leftBackImg}
        />
        <HowWeWorkCards
          text={"Our retainer services"}
          title={"I need an external marketing team"}
          frontImage={centerFrontImg}
          backImage={leftFrontImg}
        />
        <HowWeWorkCards
          text={"Let\u0027s work together"}
          title={"I Need to increase  online presence"}
          frontImage={rightFrontImg}
          backImage={centerFrontImg}
        />
      </Box>
    </Section>
  );
}

export default HowWeWork;
