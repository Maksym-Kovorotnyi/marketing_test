import { Box, Card, Typography } from "@mui/material";
import React from "react";
import topLeftImg from "../../static/images/top-left@1x.png";
import topRightImg from "../../static/images/top-right@1x.png";
import midleLeftImg from "../../static/images/midle-left@1x.png";
import midleRightImg from "../../static/images/midle-right@1x.png";
import bottomLeftImg from "../../static/images/bottom-left@1x.png";
import bottomCenterImg from "../../static/images/botom-center@1x.png";
import bottomRightImg from "../../static/images/bottom-right@1x.png";
import { ReactComponent as Star } from "../../static/svg/Star.svg";
import SelectedWorkCardContent from "../selectedWorkCardContent/SelectedWorkCardContent";
import Btn from "../button/Btn";

function GridContainer() {
  return (
    <Box
      display={"grid"}
      sx={{
        gridTemplateColumns: "repeat(4, 25%)",
        gridTemplateRows: "repeat(6, auto);",
      }}
    >
      <Card
        sx={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 3,
          maxHeight: "1161px",
          maxWidth: "681px",
          mb: "175px",
          boxShadow: "none",
        }}
      >
        <SelectedWorkCardContent
          image={topLeftImg}
          subtitle={"Strategy"}
          title={"AER Media"}
          height={"100%"}
        />
      </Card>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        sx={{
          gridColumn: 3,
          gridRow: 1,
          height: "fit-content",
        }}
      >
        <Star />
        <Typography
          variant="body2"
          fontSize={16}
          textTransform={"uppercase"}
          children={"SELECTED WORK"}
          gridRow={2}
        />
      </Box>
      <Typography
        variant="h3"
        children={"Sit nam egestas nullam nulla. Sed nisi arcu et blandit."}
        textAlign={"left"}
        mt={"auto"}
        sx={{
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 3,
          gridColumnEnd: 5,
        }}
      />
      <Card
        sx={{
          gridRowStart: 2,
          gridColumnStart: 3,
          gridColumnEnd: 5,
          maxWidth: "538px",
          maxHeight: "643px",
          mr: "auto",
          ml: "auto",
          mt: "auto",
          mb: "175px",
          boxShadow: "none",
        }}
      >
        <SelectedWorkCardContent
          image={topRightImg}
          subtitle={"DEsign"}
          title={"Valerie Wheeler"}
          marginX={true}
        />
      </Card>
      <Card
        sx={{
          gridRow: 3,
          gridColumnStart: 1,
          gridColumnEnd: 3,
          boxShadow: "none",
          maxWidth: "967px",
          maxHeight: "651px",
          mb: "175px",
        }}
      >
        <SelectedWorkCardContent
          image={midleLeftImg}
          subtitle={"Strategy"}
          title={"Luneer MGMT"}
        />
      </Card>
      <Card
        sx={{
          gridRow: 3,
          gridColumn: 4,
          boxShadow: "none",
          maxWidth: "396px",
          maxHeight: "507px",
          mt: "auto",
          mb: "175px",
        }}
      >
        <SelectedWorkCardContent
          image={midleRightImg}
          subtitle={"content"}
          title={"Social Blue Print"}
        />
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gridRowStart: 5,
          gridColumn: 1,
          boxShadow: "none",
          maxWidth: "396px",
          maxHeight: "935px",
        }}
      >
        <Box>
          <SelectedWorkCardContent
            image={bottomLeftImg}
            subtitle={"Strategy"}
            title={"Luneer MGMT1"}
          />
        </Box>
        <Box
          display={"flex"}
          gap={"32px"}
          flexDirection={"column"}
          pt={"32px"}
          sx={{ borderTop: "1px solid rgb(29, 32, 31)" }}
        >
          <Typography
            variant="body2"
            fontSize={"16px"}
            children={
              "Facilisis gravida pharetra, risus vel in. Mauris in lacus condimentum feugiat."
            }
          />
          <Btn content={"view More work"} textTransform={"uppercase"} />
        </Box>
      </Card>
      <Card
        sx={{
          gridRowStart: 5,
          gridRowEnd: 7,
          gridColumn: 2,
          boxShadow: "none",
          maxWidth: "396px",
          maxHeight: "507px",
          mt: "auto",
        }}
      >
        <SelectedWorkCardContent
          image={bottomCenterImg}
          subtitle={"Strategy"}
          title={"Luneer MGMT"}
        />
      </Card>
      <Card
        sx={{
          gridRowStart: 5,
          gridRowend: 7,
          gridColumnStart: 3,
          gridColumnEnd: 5,
          boxShadow: "none",
          maxWidth: "824px",
          maxHeight: "935px",
        }}
      >
        <SelectedWorkCardContent
          image={bottomRightImg}
          subtitle={"Strategy"}
          title={"Luneer MGMT"}
        />
      </Card>
    </Box>
  );
}

export default GridContainer;
