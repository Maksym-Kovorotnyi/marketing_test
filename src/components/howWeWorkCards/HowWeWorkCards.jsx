import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Btn from "../button/Btn";

function HowWeWorkCards({ text, title, frontImage, backImage }) {
  return (
    <Card
      sx={{
        maxWidth: "640px",
        textAlign: "center",
        padding: "64px 32px",
        borderRadius: "0",
        boxShadow: "none",
        "&:not(:last-child)": {
          borderBottom: "1px solid rgb(29, 32, 31)",
          borderRight: "1px solid rgb(29, 32, 31)",
          borderTop: "1px solid rgb(29, 32, 31)",
        },
        "&:last-child": {
          borderBottom: "1px solid rgb(29, 32, 31)",
          borderLeft: "1px solid rgb(29, 32, 31)",
          borderTop: "1px solid rgb(29, 32, 31)",
        },
        "&:hover": {
          "& .scale": {
            transform: "scale(0.9)",
          },
          "& .rotate": {
            transformOrigin: "35% -35%",
            transform: "rotate(-10deg) translateY(-100%)",
          },
        },
      }}
    >
      <CardContent sx={{ mb: "64px" }}>
        <Typography
          variant="body1"
          children={text}
          fontSize={20}
          mb={"40px"}
        ></Typography>
        <Typography variant="h4" children={title}></Typography>
      </CardContent>
      <Box maxHeight={240} mb={"64px"}>
        <CardMedia
          component="img"
          alt="Laptop"
          image={frontImage}
          className="scale"
          sx={{
            position: "relative",
            width: 360,
            mr: "auto",
            ml: "auto",
            borderRadius: "8px",
            transition: "transform 0.6s ease",
            zIndex: 1,
          }}
        />
        <CardMedia
          component="img"
          alt="Books"
          image={backImage}
          className="rotate"
          sx={{
            width: 360,
            mr: "auto",
            ml: "auto",
            borderRadius: "8px",
            transform: "translateY(-100%)",
            transition: "transform 0.6s ease",
          }}
        />
      </Box>
      <CardActions sx={{ justifyContent: "center" }}>
        <Btn content={"TELL ME MORE"} textTransform={"uppercase"} />
      </CardActions>
    </Card>
  );
}

export default HowWeWorkCards;
