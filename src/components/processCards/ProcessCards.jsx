import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Btn from "../button/Btn";
import PendingIcon from "@mui/icons-material/Pending";

function ProcessCards({ number, subtitle, title, menuText, paddingTop }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        borderBottom: "1px solid rgb(29, 32, 31)",
        pt: paddingTop ? paddingTop : "0",
        pb: "48px",
        backgroundColor: "secondary.light",
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <CardContent>
        <Box display={"flex"} mb={"32px"}>
          <Typography
            variant="body2"
            color="secondary.main"
            children={number}
            width={"110px"}
            mr={"32px"}
          />
          <Typography variant="body2" children={subtitle} mr={"auto"} />
          <PendingIcon
            fontSize="large"
            color={expanded ? "primary" : "secondary"}
            sx={{
              cursor: "pointer",
              transition: "transform 0.6s ease, color 0.6s ease",
              transform: expanded ? "rotate(-90deg)" : "",
            }}
            onClick={handleExpandClick}
          />
        </Box>
        <Typography variant="h5" children={title} ml={"142px"} mb={"32px"} />
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ ml: "142px", p: "32px", backgroundColor: "secondary.dark" }}
        >
          <Typography variant="body2" children={menuText} mb={"64px"} />
          <CardActions>
            <Btn content={"try out our team"} texttransform={"uppercase"} />
          </CardActions>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default ProcessCards;
