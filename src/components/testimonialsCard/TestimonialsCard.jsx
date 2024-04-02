import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as LargeQuote } from "../../static/svg/largeQuote.svg";

function TestimonialsCard({ text, image, signature, active }) {
  return (
    <Card
      sx={{
        maxWidth: "1252px",
        p: 0,
        pt: 4,
        boxShadow: "none",
        opacity: active ? "0.5" : "1",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <LargeQuote
          style={{
            position: "absolute",
            top: "-29.79px",
            left: "-5.51px",
          }}
        />
        <Typography variant="h3" children={text} position={"relative"} />
      </CardContent>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <CardMedia
          image={image}
          sx={{
            width: "80px",
            height: "120px",
            borderRadius: "64px",
          }}
        />
        <CardContent>
          <Typography variant="subtitle1" children={signature} />
        </CardContent>
      </Box>
    </Card>
  );
}

export default TestimonialsCard;
