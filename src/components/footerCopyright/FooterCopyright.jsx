import {
  Box,
  ButtonGroup,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Btn from "../button/Btn";

function FooterCopyright() {
  return (
    <Box display={"flex"} pt={"80px"}>
      <Typography
        variant="body2"
        textTransform={"uppercase"}
        sx={{
          mr: "auto",
        }}
      >
        PIPI-POOPOO&reg; &copy;2022
      </Typography>
      <List
        disablePadding={true}
        sx={{
          display: "flex",
          gap: "64px",
          mr: "230px",
        }}
      >
        <ListItem>
          <Link
            variant="body2"
            href="https://www.linkedin.com"
            children={"LinkedIn"}
            underline="none"
          />
        </ListItem>
        <ListItem>
          <Link
            variant="body2"
            href="https://www.instagram.com/"
            children={"Instagram"}
            underline="none"
          />
        </ListItem>
      </List>
      <ButtonGroup>
        <Btn content={"Back to top"} />
      </ButtonGroup>
    </Box>
  );
}

export default FooterCopyright;
