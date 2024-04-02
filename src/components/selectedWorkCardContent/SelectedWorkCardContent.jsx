import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function SelectedWorkCardContent({ image, subtitle, title }) {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "8px",
          mb: "24px",
          border: "none",
        }}
      >
        <CardMedia
          component={"img"}
          src={image}
          sx={{
            height: "100%",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="body2"
          children={subtitle}
          textTransform={"uppercase"}
          fontSize={12}
          mb={1}
        />
        <Typography variant="body2" children={title} />
      </CardContent>
    </>
  );
}

export default SelectedWorkCardContent;
