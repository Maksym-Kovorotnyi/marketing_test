import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import imageUrl from "../static/images/Card@x2.png";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import backgroundPaper from "../static/images/paperBackground@1x.png";
import RollBookImg from "../static/images/websiteBook@1x.png";
import { ReactComponent as FourStar } from "../static/svg/fourStar.svg";

function Website() {
  return (
    <Section
      sx={{
        position: "relative",
        pt: "80px",
        pb: "80px",
        backgroundImage: `url(${backgroundPaper})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 38%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(179deg, #fff 40%, #f0f0f0 40%)",
          zIndex: -1,
        },
      }}
    >
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: 719,
          mb: "16px",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backdropFilter: "blur(20px)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            transitionProperty: "backdrop-filter",
            transitionDuration: "1s",
            "&:hover": {
              backdropFilter: "blur(20px)",
              "+ .img": {
                transform: "translateY(-105%)",
              },
            },
          }}
        ></Box>
        <CardMedia
          component={"img"}
          className="img"
          src={RollBookImg}
          sx={{
            width: "485px",
            transform: "translateY(0)",
            transitionProperty: "transform",
            transitionDuration: "1.6s",
            mr: "auto",
            ml: "auto",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            top: 0,
            px: 1,
            py: 0.25,
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "48px",
            mt: 4,
            ml: 4,
          }}
        >
          <Typography
            variant="body2"
            fontSize={"16px"}
            textTransform={"uppercase"}
            fontWeight={500}
            children={"Website"}
          />
        </CardContent>
      </Card>
      <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
        <Box display={"flex"} gap={"16px"}>
          <FourStar />
          <Typography
            variant="body1"
            fontSize={16}
            textTransform={"uppercase"}
            children={"Featured Project"}
          ></Typography>
        </Box>
        <Typography
          variant="body1"
          fontSize={16}
          textTransform={"uppercase"}
          children={"Kate Eckstein Design"}
        ></Typography>
        <Typography
          variant="body1"
          fontSize={16}
          textTransform={"uppercase"}
          children={"Strategy, content, Design, development"}
          maxWidth={"280px"}
        ></Typography>
      </Box>
    </Section>
  );
}

export default Website;
