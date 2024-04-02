import { Box } from "@mui/material";
import React from "react";
import FooterCallToAct from "../components/footerCallToAct/FooterCallToAct";
import FooterContacts from "../components/footerContacts/FooterContacts";
import FooterCopyright from "../components/footerCopyright/FooterCopyright";
import backgroundImage from "../static/images/footerBackImg.png";

function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        maxWidth: "1920px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "80px",
        paddingBottom: "160px",
        backgroundColor: "secondary.light",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "113%",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        pb={"80px"}
        sx={{ borderBottom: "1px solid rgb(29, 32, 31)" }}
      >
        <FooterCallToAct />
        <FooterContacts />
      </Box>
      <FooterCopyright />
    </Box>
  );
}

export default Footer;
