import React from "react";
import { Link, List, ListItem, Typography } from "@mui/material";

function FooterContacts() {
  return (
    <List
      disablePadding={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      <ListItem
        disableGutters={true}
        disablePadding={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Typography
          variant="body2"
          fontSize={"16px"}
          textTransform={"uppercase"}
          children={"Phone"}
        />
        <Link
          href="tel:123 456 7890"
          variant="body2"
          fontSize={"34px"}
          children={"123 456 7890"}
          underline="none"
        ></Link>
      </ListItem>
      <ListItem
        disableGutters={true}
        disablePadding={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Typography
          variant="body2"
          fontSize={"16px"}
          textTransform={"uppercase"}
          children={"Email"}
        />
        <Link
          href="mailto:123 456 7890"
          variant="body2"
          fontSize={"34px"}
          children={"HELLO@PIPI-POOPOO.COM"}
          textTransform={"uppercase"}
          underline="none"
        ></Link>
      </ListItem>
      <ListItem
        disableGutters={true}
        disablePadding={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Typography
          variant="body2"
          fontSize={"16px"}
          textTransform={"uppercase"}
          children={"OFFICE HOURS:"}
        />
        <Typography
          variant="body2"
          fontSize={"34px"}
          children={"MONDAY - FRIDAY: 9AM - 5PM EST"}
          textTransform={"uppercase"}
        />
      </ListItem>
    </List>
  );
}

export default FooterContacts;
