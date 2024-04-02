import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Section } from "../muiThemeConfig/muiThemeConfig";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Form from "../components/form/Form";
import Women from "../static/images/someWoman@1x.png";

function GetInTouch() {
  return (
    <Section
      sx={{
        p: "48px",
        display: "flex",
        gap: "80px",
        justifyContent: "space-between",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} width={"60%"}>
        <Box display={"flex"} gap={"16px"} mb={"80px"}>
          <StarIcon />
          <Typography
            variant="body2"
            children={"Get in Touch"}
            textTransform={"uppercase"}
            fontSize={16}
          />
        </Box>
        <Typography variant="h3" textTransform={"uppercase"} mb={"180px"}>
          SCHEDULE <span style={{ textTransform: "lowercase" }}>a free</span>{" "}
          BRAND AUDIT
        </Typography>
        <Typography
          variant="body2"
          children={
            "Get expert eyes on your brand + website. One of our creative strategies will take a look at your brand and give you your best next steps to improve your online presence to increase conversions. From there, we will offer you the next steps on how to engage our team, or you can take our free advice and grow your business yourself."
          }
          mb={"64px"}
        />
        <Form />
      </Box>
      <Card
        sx={{
          width: "40%",
        }}
      >
        <CardMedia
          component={"img"}
          src={Women}
          sx={{
            height: "100%",
          }}
        />
      </Card>
    </Section>
  );
}

export default GetInTouch;
