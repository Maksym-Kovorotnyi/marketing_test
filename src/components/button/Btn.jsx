import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";
import { keyframes } from "@mui/system";

function Btn({ content, textTransform, color }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const moveIcon = keyframes`
  0% {
    transform: translate(-100%, 100%);
  }
  25% {
    transform: translate(-75%, 75%);
  }
  50% {
    transform: translate(50%, -50%);
  }
  75% {
    transform: translate(75%, -75%);
  }
  100% {
    transform: translate(100%, -100%);
  }
`;
  return (
    <>
      <Button
        texttransform={textTransform}
        color={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          overflow: "hidden",
          transitionProperty: "padding-left",
          transitionDuration: "1s",
          "&:hover": {
            pl: "30px",
            "& .moveIcon": {
              animationName: `${moveIcon}`,
              animationDuration: "2s",
              animationIterationCount: "infinite",
              animationTimingFunction: "lianer",
            },
          },
        }}
        endIcon={
          hovered ? (
            <Box
              overflow={"hidden"}
              width={"24px"}
              height={"24px"}
              borderRadius={"50%"}
            >
              <CallMadeSharpIcon
                className="moveIcon"
                sx={{ width: "20px", height: "20px" }}
              />
            </Box>
          ) : (
            <CircleRoundedIcon
              sx={{ width: "24px", height: "24px", color: "secondary.main" }}
            />
          )
        }
      >
        {content}
      </Button>
    </>
  );
}

export default Btn;
